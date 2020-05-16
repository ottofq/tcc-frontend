import React from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Checkbox,
} from '@material-ui/core';
import {
  ContainerDadosAluno,
  ContainerRadioButtonAvaliacao,
  ContainerCheckbox,
  Input,
} from './styles';

export default function AvaliacaoRU({ aluno }) {
  return (
    <ContainerDadosAluno>
      <ContainerRadioButtonAvaliacao>
        <FormLabel component="legend">Aroma das preparações</FormLabel>
        <RadioGroup name="aroma_refeicao" value={aluno.avaliacao_RU.aroma}>
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="aroma_refeicao"
            value="muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </ContainerRadioButtonAvaliacao>
      <ContainerRadioButtonAvaliacao>
        <FormLabel component="legend">Coloração do cardápio</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={aluno.avaliacao_RU.coloracao_cardapio}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="coloracao_cardapio"
            value="muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </ContainerRadioButtonAvaliacao>
      <ContainerRadioButtonAvaliacao>
        <FormLabel component="legend">Textura das preparações</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={aluno.avaliacao_RU.textura_preparacao}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="textura_preparacao"
            value="muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </ContainerRadioButtonAvaliacao>
      <ContainerRadioButtonAvaliacao>
        <FormLabel component="legend">Sabor das preparações</FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={aluno.avaliacao_RU.sabor_preparacao}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="sabor_preparacao"
            value="muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </ContainerRadioButtonAvaliacao>
      <ContainerRadioButtonAvaliacao>
        <FormLabel component="legend">
          Avalição Geral do cardápio do RU
        </FormLabel>
        <RadioGroup
          name="aroma_refeicao"
          value={aluno.avaliacao_RU.avaliacao_geral}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="muito ruim"
            label="Muito Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="ruim"
            label="Ruim"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="regular"
            label="Regular"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="bom"
            label="Bom"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            name="avaliacao_geral"
            value="muito bom"
            label="Muito Bom"
          />
        </RadioGroup>
      </ContainerRadioButtonAvaliacao>
      <ContainerCheckbox>
        <FormLabel component="legend">
          O que você acha que deveria ser melhorado no RU?
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly={true}
              defaultChecked={aluno.melhorias_RU.cardapio}
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
              defaultChecked={aluno.melhorias_RU.melhoria_sabor_preparacao}
              color="primary"
            />
          }
          label="Sabor da Preparação"
          name="melhoria_sabor_preparacao"
          readOnly={true}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.melhorias_RU.opcao_vegetariana}
              color="primary"
            />
          }
          label="Mais opção vegetariana"
          name="opcao_vegetariana"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.melhorias_RU.estrutura_fisica}
              color="primary"
            />
          }
          label="Estrutura física do RU"
          name="estrutura_fisica"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.melhorias_RU.tempo_fila}
              color="primary"
            />
          }
          label="Tempo de espera na fila"
          name="tempo_fila"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.melhorias_RU.preco_ticket}
              color="primary"
            />
          }
          label="Preço do ticket"
          name="tempo_fila"
          readOnly={true}
        />

        <Input
          name="melhoria_outros"
          defaultValue={aluno.melhorias_RU.melhoria_outros}
          InputProps={{
            readOnly: true,
          }}
          label="Outras melhorias"
          variant="outlined"
        />
      </ContainerCheckbox>
    </ContainerDadosAluno>
  );
}
