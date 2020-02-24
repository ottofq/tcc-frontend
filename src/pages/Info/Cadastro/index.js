import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save } from '@material-ui/icons';

import { Container, Form, TextFieldUI, TextArea, ButtonUI } from './styled';
import AlertToast from '../../../components/AlertToast';
import api from '../../../services/api';

export default function InfoCadastro({ history }) {
  const { register, handleSubmit, reset } = useForm();
  const [statusAlert, setStatusAlert] = useState('');

  async function onSubmit(data) {
    try {
      const { titulo, descricao } = data;
      const user = JSON.parse(localStorage.getItem('user'));
      const result = await api.post(
        '/informacoes/',
        { titulo, descricao },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (result.status === 200) {
        setStatusAlert({
          type: 'success',
          msg: 'Aviso cadastrado com sucesso!',
        });
      }
      reset();
      setTimeout(() => {
        history.push('/dashboard/avisos/listagem');
      }, 1500);
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao cadastrar o aviso!',
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldUI
          name="titulo"
          inputRef={register({ required: true })}
          label="Titulo"
          variant="outlined"
        />

        <TextArea
          name="descricao"
          ref={register({ required: true })}
          spellCheck
          placeholder="Digite um aviso"
        />

        <ButtonUI
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </ButtonUI>
      </Form>
      {statusAlert ? (
        <AlertToast
          key={new Date()}
          typeMessage={statusAlert.type}
          message={statusAlert.msg}
        />
      ) : null}
    </Container>
  );
}
