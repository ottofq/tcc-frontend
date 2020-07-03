import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Radio, FormControlLabel, CircularProgress } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './styles';

import api from '../../../services/api';

export default function Edit() {
  const [loadingData, setLoadingData] = useState(false);
  const [loadingSendData, setLoadingSendData] = useState(false);
  const { handleSubmit, setValue, control } = useForm();
  const [menu, setMenu] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function loadMenu() {
      try {
        setLoadingData(true);
        const { id } = params;
        const result = await api.get(`/cardapio/${id}`);
        setMenu(result.data);
        setLoadingData(false);
      } catch (error) {
        setLoadingData(false);
        enqueueSnackbar('Erro ao carregar o cardápio', {
          variant: 'error',
        });
      }
    }
    loadMenu();
  }, [params, enqueueSnackbar]);

  useEffect(() => {
    if (menu && loadingData === false) {
      setValue('tipo', menu.tipo);
      setValue('entrada', menu.entrada.descricao);
      setValue('proteina', menu.proteina.descricao);
      setValue('opcao', menu.opcao.descricao);
      setValue('acompanhamento', menu.acompanhamento.descricao);
      setValue('guarnicao', menu.guarnicao.descricao);
      setValue('sobremesa', menu.sobremesa.descricao);
    }
  }, [menu, setValue, loadingData]);

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
      setLoadingSendData(true);
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
      setLoadingSendData(false);
    } catch (error) {
      setLoadingSendData(false);
      enqueueSnackbar('Erro ao editar o cardápio!', {
        variant: 'error',
      });
    }
  }

  return (
    <S.Container>
      {loadingData ? (
        <CircularProgress color="primary" />
      ) : (
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
            disabled={loadingSendData}
            startIcon={loadingSendData ? '' : <Save fontSize="large" />}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loadingSendData ? (
              <CircularProgress color="primary" />
            ) : (
              'Salvar Edição'
            )}
          </S.Button>
        </S.Form>
      )}
    </S.Container>
  );
}
