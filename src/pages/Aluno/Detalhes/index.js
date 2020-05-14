import React from 'react';

import { useForm, Controller } from 'react-hook-form';

import { Container, ContainerDadosAluno, Title, Input } from './styles';

export default function AlunoDetalhes() {
  const { setValue, control } = useForm();

  return (
    <Container>
      <Title>Dados do Aluno</Title>
      <ContainerDadosAluno>
        <Controller
          as={
            <Input
              label="Nome"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="nome"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Matricula"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="matricula"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Data de Nascimento"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="data_nascimento"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Curso"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="curso"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Ano de Ingresso"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="ano_ingresso"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Sexo"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="sexo"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Bolsista"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="bolsista"
          defaultValue=""
          control={control}
        ></Controller>
        <Controller
          as={
            <Input
              label="Frenquência do RU"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="frequencia_RU"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Tipo de Refeição RU"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="tipo_refeicao_RU"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Nivel Fisico"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="nivel_fisico"
          defaultValue=""
          control={control}
        ></Controller>

        <Controller
          as={
            <Input
              label="Peso Ideal"
              InputProps={{
                readOnly: true,
              }}
            />
          }
          name="peso_ideal"
          defaultValue=""
          control={control}
        ></Controller>
      </ContainerDadosAluno>
    </Container>
  );
}
