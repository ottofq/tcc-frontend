import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Save } from '@material-ui/icons';

import { Container, Form, TextFieldUI, TextArea, ButtonUI } from './styled';
import api from '../../../services/api';
import AlertToast from '../../../components/AlertToast';

export default function InfoEdicao({ match, history }) {
  const { handleSubmit, setValue, control } = useForm();
  const [statusAlert, setStatusAlert] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    async function loadInfo() {
      try {
        const { id } = match.params;
        const result = await api.get(`/informacoes/${id}`);
        setInfo(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadInfo();
  }, [match.params]);

  useEffect(() => {
    if (info) {
      setValue('titulo', info.titulo);
      setValue('descricao', info.descricao);
    }
  }, [info, setValue]);

  async function onSubmit(data) {
    try {
      const { titulo, descricao } = data;
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));

      const result = await api.put(
        `/informacoes/${info._id}`,
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
          msg: 'Aviso editado com sucesso!',
        });
      }
      setTimeout(() => {
        history.push('/dashboard/avisos/listagem');
      }, 1500);
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao editar o aviso!',
      });
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<TextFieldUI label="Titulo" variant="outlined" />}
          name="titulo"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        ></Controller>

        <Controller
          as={<TextArea spellCheck placeholder="Digite um aviso" />}
          name="descricao"
          control={control}
          rules={{ required: true }}
        ></Controller>

        <ButtonUI
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar Edição
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
