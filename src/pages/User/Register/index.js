/* eslint-disable no-unused-expressions */
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField as Input, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import logo from '../../../assets/logo.png';
import api from '../../../services/api';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = async data => {
    try {
      const { email, password, nome } = data;
      const result = await api.post('/users', { nome, email, password });
      if (result.status === 200) {
        enqueueSnackbar('Cadastro efetuado com Sucesso!', {
          variant: 'success',
        });
        history.push('/');
      }
    } catch (error) {
      enqueueSnackbar('Erro ao registrar, email já cadastrado!', {
        variant: 'error',
      });
    }
  };

  return (
    <S.Container>
      <S.ContainerRegister>
        <img src={logo} alt="Logo UFES" />
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputRef={register({ required: true })}
            type="text"
            name="nome"
            label="Nome"
            variant="outlined"
          />
          <Input
            inputRef={register({ required: true })}
            type="email"
            name="email"
            label="Email"
            variant="outlined"
          />

          <Input
            inputRef={register({ required: true })}
            name="password"
            type="password"
            label="Senha"
            variant="outlined"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </S.ContainerRegister>
    </S.Container>
  );
}
