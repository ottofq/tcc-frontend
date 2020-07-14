import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerRequest } from 'redux/modules/auth/actions';
import * as S from './styles';
import logo from '../../../assets/logo.png';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, isLogged } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLogged) {
      history.push('/dashboard');
    }
  }, [isLogged, history]);

  const onSubmit = async data => {
    const { email, password, nome } = data;
    dispatch(registerRequest(nome, email, password, history));
  };

  return (
    <S.Container>
      <S.ContainerRegister>
        <img src={logo} alt="Logo UFES" />
        <h1>Cadastro</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            inputRef={register({ required: true })}
            type="text"
            name="nome"
            label="Nome"
            variant="outlined"
          />
          <S.Input
            inputRef={register({ required: true })}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />

          <S.Input
            inputRef={register({ required: true })}
            name="password"
            type="password"
            label="Senha"
            variant="outlined"
          />

          <S.Button
            disabled={loading}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loading ? <CircularProgress color="inherit" /> : 'Cadastrar'}
          </S.Button>
        </S.Form>
      </S.ContainerRegister>
    </S.Container>
  );
}
