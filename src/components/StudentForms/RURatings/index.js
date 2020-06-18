import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Checkbox,
} from '@material-ui/core';
import * as S from './styles';

export default function RURatings({ student }) {
  return (
    <S.ContainerStudentData>
      <S.ContainerRadioButtonRating>
        <FormLabel component="legend">Aroma das preparações</FormLabel>
        <RadioGroup name="aroma_refeicao" value={student.avaliacao_RU.aroma}>
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="Muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="Ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="Regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="Bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="Muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </S.ContainerRadioButtonRating>
      <S.ContainerRadioButtonRating>
        <FormLabel component="legend">Coloração do cardápio</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={student.avaliacao_RU.coloracao_cardapio}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="Muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="Ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="Regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="Bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="Muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </S.ContainerRadioButtonRating>
      <S.ContainerRadioButtonRating>
        <FormLabel component="legend">Textura das preparações</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={student.avaliacao_RU.textura_preparacao}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="Muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="Ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="Regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="Bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="Muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </S.ContainerRadioButtonRating>
      <S.ContainerRadioButtonRating>
        <FormLabel component="legend">Sabor das preparações</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={student.avaliacao_RU.sabor_preparacao}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="Muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="Ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="Regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="Bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="Muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </S.ContainerRadioButtonRating>
      <S.ContainerRadioButtonRating>
        <FormLabel component="legend">
          Avalição Geral do cardápio do RU
        </FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={student.avaliacao_RU.avaliacao_geral}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="Muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="Ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="Regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="Bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="Muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </S.ContainerRadioButtonRating>
      <S.ContainerCheckbox>
        <FormLabel component="legend">
          O que você acha que deveria ser melhorado no RU?
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly
              defaultChecked={student.melhorias_RU.cardapio}
              color="primary"
              onClick={e => e.preventDefault()}
            />
          }
          label="Cardápio"
          name="melhoria_cardapio"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.melhorias_RU.melhoria_sabor_preparacao}
              color="primary"
            />
          }
          label="Sabor da Preparação"
          name="melhoria_sabor_preparacao"
          readOnly
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.melhorias_RU.opcao_vegetariana}
              color="primary"
            />
          }
          label="Mais opção vegetariana"
          name="opcao_vegetariana"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.melhorias_RU.estrutura_fisica}
              color="primary"
            />
          }
          label="Estrutura física do RU"
          name="estrutura_fisica"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.melhorias_RU.tempo_fila}
              color="primary"
            />
          }
          label="Tempo de espera na fila"
          name="tempo_fila"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.melhorias_RU.preco_ticket}
              color="primary"
            />
          }
          label="Preço do ticket"
          name="tempo_fila"
          readOnly
        />

        <S.Input
          name="melhoria_outros"
          defaultValue={student.melhorias_RU.melhoria_outros}
          InputProps={{
            readOnly: true,
          }}
          label="Outras melhorias"
          variant="outlined"
        />
      </S.ContainerCheckbox>
    </S.ContainerStudentData>
  );
}

RURatings.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
};
