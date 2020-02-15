import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField as Input, Button } from '@material-ui/core';

import { Container, ContainerLogin } from './styled';
import logo from '../../assets/logo.png';

export default function Login({ history }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  function handleButton(e) {
    e.preventDefault();
    history.push('/dashboard');
  }

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
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <Input
              inputRef={register({ required: true })}
              type="password"
              name="senha"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
            />

            <Button onClick={e => handleButton(e)} type="submit">
              Login
            </Button>
          </form>

          <Link to="/register">Cadastre-se</Link>
        </ContainerLogin>
      </Container>
    </>
  );
}
