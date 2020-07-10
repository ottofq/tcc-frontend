import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from 'redux/modules/auth/actions';
import * as S from './styles';
import logo from '../../../assets/logo.png';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.auth.loading);

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(loginRequest(email, password, history));
  };

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

          <S.Button
            disabled={loading}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loading ? <CircularProgress color="inherit" /> : 'Login'}
          </S.Button>
        </S.Form>

        <Link to="/register">Cadastre-se</Link>
      </S.ContainerLogin>
    </S.Container>
  );
};

export default Login;
