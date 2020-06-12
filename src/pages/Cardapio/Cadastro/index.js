import React from 'react';
import { useForm } from 'react-hook-form';
import { Radio, FormControlLabel } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { useSnackbar } from 'notistack';

import {
  Container,
  Input,
  StyledButton,
  Form,
  RadioGroup,
  FormLabel,
} from './styles';
import api from '../../../services/api';

export default function Cadastro({ history }) {
  const { register, handleSubmit, reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();

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

    try {
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));
      const result = await api.post(
        '/cardapio',
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
        enqueueSnackbar('Novo cardápio cadastrado!', {
          variant: 'success',
        });
        history.push('/dashboard');
        reset();
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Erro ao cadastrar novo cardápio!', {
        variant: 'error',
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel component="legend">Tipo de Refeição</FormLabel>
        <RadioGroup aria-label="tipo" name="tipo">
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
        </RadioGroup>

        <Input
          name="entrada"
          inputRef={register({ required: true })}
          id="outlined-basic"
          label="Entrada"
          variant="outlined"
        />

        <Input
          inputRef={register({ required: true })}
          name="proteina"
          id="outlined-basic"
          label="Proteina"
          variant="outlined"
        />

        <Input
          inputRef={register({ required: true })}
          name="opcao"
          id="outlined-basic"
          label="Opção"
          variant="outlined"
        />

        <Input
          inputRef={register({ required: true })}
          name="acompanhamento"
          id="outlined-basic"
          label="Acompanhamento"
          variant="outlined"
        />

        <Input
          inputRef={register({ required: true })}
          name="guarnicao"
          id="outlined-basic"
          label="Guarnicão"
          variant="outlined"
        />

        <Input
          inputRef={register({ required: true })}
          name="sobremesa"
          id="outlined-basic"
          label="Sobremesa"
          variant="outlined"
        />

        <StyledButton
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </StyledButton>
      </Form>
    </Container>
  );
}
