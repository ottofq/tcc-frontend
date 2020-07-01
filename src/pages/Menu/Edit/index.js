import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Radio, FormControlLabel } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './styles';

import api from '../../../services/api';

export default function Edit() {
  const { handleSubmit, setValue, control } = useForm();
  const [menu, setMenu] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function loadCardapio() {
      try {
        const { id } = params;
        const result = await api.get(`/cardapio/${id}`);
        setMenu(result.data);
      } catch (error) {
        enqueueSnackbar('Erro ao carregar o cardápio', {
          variant: 'error',
        });
      }
    }

    loadCardapio();
  }, [params, enqueueSnackbar]);

  useEffect(() => {
    if (menu) {
      setValue('tipo', menu.tipo);
      setValue('entrada', menu.entrada.descricao);
      setValue('proteina', menu.proteina.descricao);
      setValue('opcao', menu.opcao.descricao);
      setValue('acompanhamento', menu.acompanhamento.descricao);
      setValue('guarnicao', menu.guarnicao.descricao);
      setValue('sobremesa', menu.sobremesa.descricao);
    }
  }, [menu, setValue]);

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

      const result = await api.put(`/cardapio/${id}`, {
        tipo,
        entrada,
        proteina,
        opcao,
        acompanhamento,
        guarnicao,
        sobremesa,
      });

      if (result.status === 200) {
        enqueueSnackbar('Cardápio editado com Sucesso!', {
          variant: 'success',
        });
      }

      history.push('/dashboard/cardapio/listagem');
    } catch (error) {
      enqueueSnackbar('Erro ao editar o cardápio!', {
        variant: 'error',
      });
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormLabel component="legend">Tipo de Refeição</S.FormLabel>

        <Controller
          as={
            <S.RadioGroup aria-label="tipo" name="tipo">
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
            </S.RadioGroup>
          }
          control={control}
          name="tipo"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Entrada" variant="outlined" />}
          control={control}
          name="entrada"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Proteina" variant="outlined" />}
          control={control}
          name="proteina"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Opção" variant="outlined" />}
          control={control}
          name="opcao"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Acompanhamento" variant="outlined" />}
          control={control}
          name="acompanhamento"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Guarnicão" variant="outlined" />}
          control={control}
          name="guarnicao"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          as={<S.Input label="Sobremesa" variant="outlined" />}
          control={control}
          name="sobremesa"
          defaultValue=""
          rules={{ required: true }}
        />

        <S.Button
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar Edição
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
