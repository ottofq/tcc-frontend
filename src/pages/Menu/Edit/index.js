import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Radio, FormControlLabel, CircularProgress } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenu, editMenu } from 'redux/modules/menu/actions';
import * as S from './styles';

export default function Edit() {
  const { handleSubmit, setValue, control } = useForm();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { data: menu, loadingData, loadingEdit } = useSelector(
    state => state.menu
  );

  useEffect(() => {
    const { id } = params;
    dispatch(fetchMenu(id));
  }, [params, dispatch]);

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

    const { id } = params;
    dispatch(
      editMenu(
        id,
        tipo,
        entrada,
        proteina,
        opcao,
        acompanhamento,
        guarnicao,
        sobremesa,
        history
      )
    );
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
            disabled={loadingEdit}
            startIcon={loadingEdit ? '' : <Save fontSize="large" />}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loadingEdit ? (
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
