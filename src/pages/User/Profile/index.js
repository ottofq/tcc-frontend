/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import api from '../../../services/api';

export default function Profile() {
  const { register, setValue, handleSubmit } = useForm();
  const [editar, setEditar] = useState(true);
  const [user, setUser] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('@app-ru/user'));
    setUser(localStorageUser);
  }, []);

  useEffect(() => {
    setValue('nome', user?.user?.nome);
    setValue('email', user?.user?.email);
  }, [setValue, user]);

  function handleEditar() {
    setEditar(false);
  }

  async function onSubmit(data) {
    const { nome, email, oldPassword, newPassword, repeatNewPassword } = data;

    try {
      if (newPassword === repeatNewPassword) {
        await api.put(`/users/${user.user._id}`, {
          nome,
          email,
          oldPassword,
          newPassword,
        });

        enqueueSnackbar('Dados Atualizado com sucesso!', {
          variant: 'success',
        });

        localStorage.removeItem('@app-ru/user');
        history.push('/');
      } else {
        enqueueSnackbar('Verifique a sua nova senha!', {
          variant: 'error',
        });
      }
    } catch (error) {
      enqueueSnackbar('Senha atual incorreta!', {
        variant: 'error',
      });
    }
  }

  return (
    <S.Container>
      <S.ContainterTitle>
        <h2>Seus Dados</h2>
      </S.ContainterTitle>

      <S.ContainerInputs>
        <S.Input
          name="nome"
          inputRef={register({ required: true })}
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          InputProps={{
            readOnly: editar,
          }}
        />
        <S.Input
          name="email"
          type="email"
          inputRef={register({ required: true })}
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          disabled
        />
        <S.Input
          name="oldPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Senha Atual"
          variant="outlined"
          disabled={editar}
        />
        <S.Input
          name="newPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Nova Senha"
          variant="outlined"
          disabled={editar}
        />
        <S.Input
          name="repeatNewPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Repita nova senha"
          variant="outlined"
          disabled={editar}
        />
        <S.Button
          onClick={editar ? handleEditar : handleSubmit(onSubmit)}
          color="primary"
          variant="contained"
        >
          {editar ? 'Editar Dados' : 'Salvar'}
        </S.Button>
      </S.ContainerInputs>
    </S.Container>
  );
}
