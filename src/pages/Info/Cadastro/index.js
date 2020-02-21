import React from 'react';
import { useForm } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { Container, Form, TextFieldUI, TextArea, ButtonUI } from './styled';

export default function InfoCadastro() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldUI
          name="titulo"
          inputRef={register({ required: true })}
          id="outlined-basic"
          label="Titulo"
          variant="outlined"
        />

        <TextArea
          name="descricao"
          ref={register({ required: true })}
          spellCheck
          placeholder="Digite um aviso"
        />

        <ButtonUI
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </ButtonUI>
      </Form>
    </Container>
  );
}
