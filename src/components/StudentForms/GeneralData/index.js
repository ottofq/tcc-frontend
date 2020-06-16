import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from '@material-ui/core';

import { ContainerDadosAluno, ContainerRadioButton, Input } from './styles';

export default function GeneralData({ student }) {
  return (
    <ContainerDadosAluno>
      <Input
        defaultValue={student.nome}
        variant="outlined"
        name="nome"
        label="Nome"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.matricula}
        variant="outlined"
        name="matricula"
        label="Matricula"
        InputProps={{
          readOnly: true,
        }}
      />
      <Input
        defaultValue={student.data_nascimento}
        type="date"
        variant="outlined"
        name="data_nascimento"
        label="Data de Nascimento"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.curso}
        variant="outlined"
        name="curso"
        label="Curso"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.ano_ingresso}
        variant="outlined"
        name="ano_ingresso"
        label="Ano de Ingresso"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.sexo}
        variant="outlined"
        name="sexo"
        label="Sexo"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.bolsista}
        variant="outlined"
        name="bolsista"
        label="Bolsista do RU"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.frequencia_RU}
        variant="outlined"
        name="frequencia_RU"
        label="Frenquência das refeições no RU"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.tipo_refeicao_RU}
        variant="outlined"
        name="tipo_refeicao_RU"
        label="Tipo de Refeição consumida no RU"
        InputProps={{
          readOnly: true,
        }}
      />

      <Input
        defaultValue={student.nivel_fisico}
        variant="outlined"
        name="nivel_fisico"
        label="Nível de atividade física"
        InputProps={{
          readOnly: true,
        }}
      />
      <ContainerRadioButton>
        <FormLabel component="legend">
          Peso ideal para a sua idade e sexo
        </FormLabel>
        <RadioGroup
          aria-label="peso ideal"
          name="peso_ideal"
          value={student.peso_ideal ? 'sim' : 'nao'}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="peso_ideal"
            value="sim"
            label="Sim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="peso_ideal"
            value="nao"
            label="Não"
          />
        </RadioGroup>
      </ContainerRadioButton>
      <ContainerRadioButton>
        <FormLabel component="legend">Utiliza saleiro à mesa</FormLabel>
        <RadioGroup
          aria-label="peso ideal"
          name="adiciona_sal"
          value={student.adiciona_sal ? 'sim' : 'nao'}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="adiciona_sal"
            value="sim"
            label="Sim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="adiciona_sal"
            value="nao"
            label="Não"
          />
        </RadioGroup>
      </ContainerRadioButton>

      <ContainerRadioButton>
        <FormLabel component="legend">Utiliza o óleo composto</FormLabel>
        <RadioGroup
          aria-label="peso ideal"
          name="utiliza_oleo_composto"
          value={student.utiliza_oleo_composto ? 'sim' : 'nao'}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="utiliza_oleo_composto"
            value="sim"
            label="Sim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="utiliza_oleo_composto"
            value="nao"
            label="Não"
          />
        </RadioGroup>
      </ContainerRadioButton>

      <ContainerRadioButton>
        <FormLabel component="legend">Tabagista</FormLabel>
        <RadioGroup
          aria-label="peso ideal"
          name="tabagista"
          value={student.tabagista ? 'sim' : 'nao'}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="tabagista"
            value="sim"
            label="Sim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="tabagista"
            value="nao"
            label="Não"
          />
        </RadioGroup>
      </ContainerRadioButton>
      <Input
        name="consome_bebida_alcoolica"
        defaultValue={student.consome_bebida_alcoolica}
        InputProps={{
          readOnly: true,
        }}
        label="Consome Bebida Alcoólica"
        variant="outlined"
      />
      <Input
        name="vegano_vegetariano"
        defaultValue={student.vegano_vegetariano}
        InputProps={{
          readOnly: true,
        }}
        label="Vegano ou Vegetariano"
        variant="outlined"
      />
    </ContainerDadosAluno>
  );
}

GeneralData.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
};
