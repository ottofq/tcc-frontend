import React from 'react';
import { useForm } from 'react-hook-form';
import { Radio, FormControlLabel, CircularProgress } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createMenu } from 'redux/modules/menu/actions';
import * as S from './styles';

export default function Create() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loadingData: loading } = useSelector(state => state.menu);
  const history = useHistory();

  const onSubmit = async data => {
    const {
      tipo,
      entrada,
      proteina,
      opcao,
      acompanhamento,
      guarnicao,
      sobremesa,
    } = data;

    dispatch(
      createMenu(
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
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormLabel component="legend">Tipo de Refeição</S.FormLabel>
        <S.RadioGroup aria-label="tipo" name="tipo">
          <FormControlLabel
            value="Almoço"
            control={<Radio required color="primary" inputRef={register} />}
            label="Almoço"
          />
          <FormControlLabel
            value="Jantar"
            control={<Radio required color="primary" inputRef={register} />}
            label="Jantar"
          />
        </S.RadioGroup>

        <S.Input
          name="entrada"
          inputRef={register({ required: true })}
          id="outlined-basic"
          label="Entrada"
          variant="outlined"
        />

        <S.Input
          inputRef={register({ required: true })}
          name="proteina"
          id="outlined-basic"
          label="Proteina"
          variant="outlined"
        />

        <S.Input
          inputRef={register({ required: true })}
          name="opcao"
          id="outlined-basic"
          label="Opção"
          variant="outlined"
        />

        <S.Input
          inputRef={register({ required: true })}
          name="acompanhamento"
          id="outlined-basic"
          label="Acompanhamento"
          variant="outlined"
        />

        <S.Input
          inputRef={register({ required: true })}
          name="guarnicao"
          id="outlined-basic"
          label="Guarnicão"
          variant="outlined"
        />

        <S.Input
          inputRef={register({ required: true })}
          name="sobremesa"
          id="outlined-basic"
          label="Sobremesa"
          variant="outlined"
        />

        <S.Button
          disabled={loading}
          startIcon={loading ? '' : <Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          {loading ? <CircularProgress color="inherit" /> : 'Cadastrar'}
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
