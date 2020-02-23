import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  TextField as Input,
  Button,
  CircularProgress,
} from '@material-ui/core';

import AlertToast from '../../components/AlertToast';
import { Container, ContainerLogin } from './styled';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import { useEffect } from 'react';

export default function Login({ history }) {
  const { register, handleSubmit } = useForm();
  const [statusAlert, setStatusAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async data => {
    try {
      setLoading(true);
      const { email, password } = data;
      const result = await api.post('/login', { email, password });

      if (result.status === 200) {
        const local = JSON.stringify(result);
        localStorage.setItem('user', local);
        setStatusAlert({
          type: 'success',
          msg: 'Login Efetuado com Sucesso!',
          date: new Date(),
        });

        history.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao realizar o Login, verifique seus dados!',
        date: new Date(),
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    function verifyUser() {
      const user = localStorage.getItem('user');

      if (user) {
        history.push('/dashboard');
      }
    }
    verifyUser();
  }, [history]);

  return (
    <>
      <Container>
        <ContainerLogin>
          <img src={logo} alt="Logo UFES" />
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputRef={register({ required: true })}
              type="email"
              name="email"
              label="Email"
              variant="outlined"
            />

            <Input
              inputRef={register({ required: true })}
              type="password"
              name="password"
              label="Senha"
              variant="outlined"
            />

            <Button type="submit">
              {loading ? <CircularProgress color="inherit" /> : 'Login'}
            </Button>
          </form>

          {statusAlert ? (
            <AlertToast
              key={statusAlert.date}
              typeMessage={statusAlert.type}
              message={statusAlert.msg}
            />
          ) : null}
          <Link to="/register">Cadastre-se</Link>
        </ContainerLogin>
      </Container>
    </>
  );
}
