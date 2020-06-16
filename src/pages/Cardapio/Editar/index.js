import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Radio, FormControlLabel } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useHistory, useParams } from 'react-router-dom';

import {
  Container,
  Input,
  StyledButton,
  Form,
  RadioGroup,
  FormLabel,
} from './styles';

import api from '../../../services/api';

export default function Cadastro() {
  const { handleSubmit, setValue, control } = useForm();
  const [cardapio, setCardapio] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function loadCardapio() {
      try {
        const { id } = params;
        const result = await api.get(`/cardapio/${id}`);
        setCardapio(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadCardapio();
  }, [params]);

  useEffect(() => {
    if (cardapio) {
      setValue('tipo', cardapio.tipo);
      setValue('entrada', cardapio.entrada.descricao);
      setValue('proteina', cardapio.proteina.descricao);
      setValue('opcao', cardapio.opcao.descricao);
      setValue('acompanhamento', cardapio.acompanhamento.descricao);
      setValue('guarnicao', cardapio.guarnicao.descricao);
      setValue('sobremesa', cardapio.sobremesa.descricao);
    }
  }, [cardapio, setValue]);

  async function onSubmit(data) {
    const {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
    } = data;
    try {
      const { id } = params;
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));

      const result = await api.put(
        `/cardapio/${id}`,
        {
          tipo,
          entrada,
          proteina,
          opcao,
          acompanhamento,
          guarnicao,
          sobremesa,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (result.status === 200) {
        enqueueSnackbar('Cardápio editado com Sucesso!', {
          variant: 'success',
        });
      }

      history.push('/dashboard/cardapio');
    } catch (error) {
      enqueueSnackbar('Erro ao editar o cardápio!', {
        variant: 'error',
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel component="legend">Tipo de Refeição</FormLabel>

        <Controller
          as={
            <RadioGroup aria-label="tipo" name="tipo">
              <FormControlLabel
                value="Almoço"
                control={<Radio required color="primary" />}
                label="Almoço"
              />
              <FormControlLabel
                value="Jantar"
                control={<Radio required color="primary" />}
                label="Jantar"
              />
            </RadioGroup>
          }
          control={control}
          name="tipo"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Entrada" variant="outlined" />}
          control={control}
          name="entrada"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Proteina" variant="outlined" />}
          control={control}
          name="proteina"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Opção" variant="outlined" />}
          control={control}
          name="opcao"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Acompanhamento" variant="outlined" />}
          control={control}
          name="acompanhamento"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Guarnicão" variant="outlined" />}
          control={control}
          name="guarnicao"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<Input label="Sobremesa" variant="outlined" />}
          control={control}
          name="sobremesa"
          defaultValue=""
          rules={{ required: true }}
        />

        <StyledButton
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar Edição
        </StyledButton>
      </Form>
    </Container>
  );
}
