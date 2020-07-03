import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Radio, FormControlLabel, CircularProgress } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import api from '../../../services/api';

export default function Create() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = async data => {
    setLoading(true);
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
      const result = await api.post('/cardapio', {
        tipo,
        entrada,
        proteina,
        opcao,
        acompanhamento,
        guarnicao,
        sobremesa,
      });

      if (result.status === 200) {
        enqueueSnackbar('Novo cardápio cadastrado!', {
          variant: 'success',
        });
        setLoading(false);
        reset();
        history.push('/dashboard');
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Erro ao cadastrar novo cardápio!', {
        variant: 'error',
      });
    }
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
