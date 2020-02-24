import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowBack } from '@material-ui/icons';
import { format, parseISO } from 'date-fns';
import { Container, Form, TextFieldUI, TextArea, ButtonUI } from './styled';
import api from '../../../services/api';

export default function DetalhesInfo({ match, history }) {
  const { control, setValue } = useForm();

  useEffect(() => {
    async function loadInfo() {
      try {
        const { id } = match.params;
        const result = await api.get(`/informacoes/${id}`);
        setValue('titulo', result.data.titulo);
        setValue('data', format(parseISO(result.data.data), 'yyyy-MM-dd'));
        setValue('descricao', result.data.descricao);
      } catch (error) {
        console.log(error);
      }
    }
    loadInfo();
  }, [match.params, setValue]);

  function handleClick() {
    history.goBack();
  }

  return (
    <Container>
      <Form>
        <Controller
          as={
            <TextFieldUI type="date" disabled label="Data" variant="outlined" />
          }
          name="data"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={<TextFieldUI disabled label="Titulo" variant="outlined" />}
          name="titulo"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <TextArea
              disabled={true}
              spellCheck
              placeholder="Digite um aviso"
            />
          }
          name="descricao"
          control={control}
        ></Controller>

        <ButtonUI
          startIcon={<ArrowBack fontSize="large" />}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Voltar
        </ButtonUI>
      </Form>
    </Container>
  );
}
