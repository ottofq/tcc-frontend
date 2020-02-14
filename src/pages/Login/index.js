import React from 'react';
import { Link } from 'react-router-dom';

import { Container, ContainerLogin } from './styled';
import logo from '../../assets/logo.png';

export default function Login({ history }) {
  const handleSubmit = e => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <>
      <Container>
        <ContainerLogin>
          <img src={logo} alt="Logo UFES" />
          <h2>Login</h2>
          <form>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="Digite seu e-mail" />

            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" placeholder="Digite sua senha" />

            <button onClick={e => handleSubmit(e)} type="submit">
              Login
            </button>
          </form>

          <Link to="/register">Cadastre-se</Link>
        </ContainerLogin>
      </Container>
    </>
  );
}
