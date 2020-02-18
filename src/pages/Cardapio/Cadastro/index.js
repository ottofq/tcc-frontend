import React from 'react';
import { useForm } from 'react-hook-form';
import { Radio, FormControlLabel } from '@material-ui/core';
import { Save } from '@material-ui/icons';

import {
  Container,
  Input,
  StyledButton,
  Form,
  RadioGroup,
  FormLabel,
} from './styled';

export default function Cadastro() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel component="legend">Tipo de Refeição</FormLabel>
        <RadioGroup aria-label="tipo" name="tipo">
          <FormControlLabel
            value="almoço"
            control={<Radio required color="primary" inputRef={register} />}
            label="Almoço"
          />
          <FormControlLabel
            value="jantar"
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
