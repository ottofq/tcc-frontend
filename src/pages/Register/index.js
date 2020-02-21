import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField as Input, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { Container, ContainerRegister } from './styled';
import logo from '../../assets/logo.png';

export default function Login({ history }) {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = data => {
    console.log(data);
  };

  async function handleButton(e) {
    e.preventDefault();
    setOpen(true);
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Container>
        <ContainerRegister>
          <img src={logo} alt="Logo UFES" />
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputRef={register({ required: true })}
              type="text"
              name="nome"
              id="outlined-basic"
              label="Nome"
              variant="outlined"
            />
            <Input
              inputRef={register({ required: true })}
              type="email"
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <Input
              inputRef={register({ required: true })}
              type="password"
              name="senha"
              id="outlined-basic"
              label="Senha"
              variant="outlined"
            />

            <Button onClick={e => handleButton(e)} type="submit">
              Cadastrar
            </Button>
          </form>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
          >
            <Alert variant="filled" onClose={handleClose} severity="success">
              Cadastro efetuado com sucesso!
            </Alert>
          </Snackbar>
        </ContainerRegister>
      </Container>
    </>
  );
}
