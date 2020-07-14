/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { editNameAndPass } from 'redux/modules/user/actions';
import * as S from './styles';

export default function Profile() {
  const { register, setValue, handleSubmit, setError, errors } = useForm();
  const [editar, setEditar] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.user.loading);

  useEffect(() => {
    setValue('nome', user.nome);
    setValue('email', user.email);
  }, [setValue, user]);

  function handleEditar() {
    setEditar(false);
  }

  async function onSubmit(data) {
    const { nome, oldPassword, newPassword, repeatNewPassword } = data;

    if (newPassword === repeatNewPassword) {
      dispatch(editNameAndPass(user.id, nome, oldPassword, newPassword));
    } else {
      setError('newPassword', {
        type: 'manual',
        message: 'As senha não confere, digite novamente a nova senha!',
      });
      setErrorMessage('As senha não confere, digite novamente a nova senha!');
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
          label="Nome"
          variant="outlined"
          InputProps={{
            readOnly: editar,
          }}
          disabled={editar || loading}
        />
        <S.Input
          name="email"
          type="email"
          inputRef={register({ required: true })}
          label="Email"
          variant="outlined"
          disabled
        />
        <S.Input
          name="oldPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Senha Atual"
          variant="outlined"
          disabled={editar || loading}
        />

        <S.Input
          error={errors.newPassword}
          name="newPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Nova Senha"
          variant="outlined"
          disabled={editar || loading}
        />

        <S.Input
          error={errors.newPassword}
          helperText={errorMessage}
          name="repeatNewPassword"
          type="password"
          inputRef={register({ required: true })}
          label="Repita nova senha"
          variant="outlined"
          disabled={editar || loading}
        />

        <S.Button
          disabled={loading}
          onClick={editar ? handleEditar : handleSubmit(onSubmit)}
          color="primary"
          variant="contained"
        >
          {loading ? <CircularProgress color="inherit" /> : null}
          {editar ? 'Editar Dados' : 'Salvar'}
        </S.Button>
      </S.ContainerInputs>
    </S.Container>
  );
}
