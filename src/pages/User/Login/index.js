import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { CircularProgress } from '@material-ui/core';

import * as S from './styles';
import logo from '../../../assets/logo.png';
import api from '../../../services/api';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      setLoading(true);
      const { email, password } = data;
      const result = await api.post('/login', { email, password });

      if (result.status === 200) {
        const local = JSON.stringify(result.data);
        localStorage.setItem('@app-ru/user', local);
        enqueueSnackbar('Login Efetuado com Sucesso!', {
          variant: 'success',
        });
        history.push('/dashboard');
      }
    } catch (error) {
      enqueueSnackbar('Erro ao efetuar o login, verifique seus dados!', {
        variant: 'error',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    function verifyUser() {
      const user = localStorage.getItem('@app-ru/user');

      if (user) {
        history.push('/dashboard');
      }
    }
    verifyUser();
  }, [history]);

  return (
    <S.Container>
      <S.ContainerLogin>
        <img src={logo} alt="Logo UFES" />
        <h1>Login</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            inputRef={register({ required: true })}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />

          <S.Input
            inputRef={register({ required: true })}
            type="password"
            name="password"
            label="Senha"
            variant="outlined"
          />

          <S.Button variant="contained" color="primary" type="submit">
            {loading ? <CircularProgress color="inherit" /> : 'Login'}
          </S.Button>
        </S.Form>

        <Link to="/register">Cadastre-se</Link>
      </S.ContainerLogin>
    </S.Container>
  );
}
