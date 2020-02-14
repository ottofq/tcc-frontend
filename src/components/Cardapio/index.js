import React from 'react';
import { useForm } from 'react-hook-form';

import { Container } from './styled';

export default function Cardapio() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="tipo">Tipo de Refeição</label>
        <select ref={register({ required: true })} name="tipo" id="tipo">
          <option value="almoco">Almoço</option>
          <option value="jantar">Jantar</option>
        </select>

        <label htmlFor="entrada">Entrada</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="entrada"
          id="entrada"
          required
        />

        <label htmlFor="proteina">Proteína</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="proteina"
          id="proteina"
          required
        />

        <label htmlFor="opcao">Opcão</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="opcao"
          id="opcao"
          required
        />

        <label htmlFor="acompanhamento">Acompanhamento</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="acompanhamento"
          id="acompanham
          requiredento"
        />

        <label htmlFor="guarnicao">Guarnição</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="guarnicao"
          id="guarnicao"
          required
        />

        <label htmlFor="sobremesa">Sobremesa</label>
        <input
          ref={register({ required: true })}
          type="text"
          name="sobremesa"
          id="sobremesa"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}
