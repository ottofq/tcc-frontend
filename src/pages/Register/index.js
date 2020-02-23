/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField as Input, Button } from '@material-ui/core';
import AlertToast from '../../components/AlertToast';

import { Container, ContainerRegister } from './styled';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Register({ history }) {
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState('');

  const onSubmit = async data => {
    try {
      const { email, password } = data;
      const result = await api.post('/users', { email, password });
      if (result.status === 200) {
        setStatus({
          type: 'success',
          msg: 'Cadastro Efetuado com Sucesso!',
          date: new Date(),
        });
        setTimeout(() => {
          history.push('/');
        }, 1900);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        msg: 'Erro ao realizar o cadastro!',
        date: new Date(),
      });
    }
  };

  return (
    <>
      <Container>
        <ContainerRegister>
          <img src={logo} alt="Logo UFES" />
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputRef={register({ required: true })}
              type="text"
              name="nome"
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
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
              name="password"
              type="password"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
            />

            <Button type="submit">Cadastrar</Button>
          </form>
          {status ? (
            <AlertToast
              key={status.date}
              typeMessage={status.type}
              message={status.msg}
            />
          ) : null}
        </ContainerRegister>
      </Container>
    </>
  );
}
