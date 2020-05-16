import React from 'react';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

import { ContainerDadosAluno, ContainerCheckbox, Input } from './styles';

export default function AlergiasPatologias({ aluno }) {
  return (
    <ContainerDadosAluno>
      <ContainerCheckbox>
        <FormLabel component="legend">Alergias</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly={true}
              defaultChecked={aluno.alergias.nenhuma}
              color="primary"
              onClick={e => e.preventDefault()}
            />
          }
          label="Nenhuma Alergia"
          name="alergias_nenhuma"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.alergias.alergia_gluten}
              color="primary"
            />
          }
          label="Alergia ao glúten"
          name="alergia_gluten"
          readOnly={true}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.alergias.intolerancia_lactose}
              color="primary"
            />
          }
          label="Intolerância à lactose"
          name="intolerancia_lactose"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.alergias.proteina_leite_vaca}
              color="primary"
            />
          }
          label="Proteína do leite de vaca"
          name="proteina_leite_vaca"
          readOnly={true}
        />

        <Input
          name="outras_alergias"
          defaultValue={aluno.alergias.outras_alergias}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Alergias"
          variant="outlined"
        />
        <Input
          name="medicamento_continuo"
          defaultValue={aluno.medicamento_continuo}
          InputProps={{
            readOnly: true,
          }}
          label="Medicamento Continuo"
          variant="outlined"
        />
      </ContainerCheckbox>
      <ContainerCheckbox>
        <FormLabel component="legend">Patologias</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly={true}
              defaultChecked={aluno.patologias.doenca_cardiovascular}
              color="primary"
              onClick={e => e.preventDefault()}
            />
          }
          label="Doença Cardiovascular"
          name="doenca_cardiovascular"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias.hipertensao_arterial}
              color="primary"
            />
          }
          label="Hipertensão Arterial"
          name="hipertensao_arterial"
          readOnly={true}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias.obesidade}
              color="primary"
            />
          }
          label="Obesidade"
          name="obesidade"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias.dislipidemias}
              color="primary"
            />
          }
          label="Dislipidemias"
          name="dislipidemias"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias.doenca_arterial_coronariana}
              color="primary"
            />
          }
          label="Doença Arterial Coronariana"
          name="doenca_arterial_coronariana"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias.diabetes}
              color="primary"
            />
          }
          label="Diabetes"
          name="diabetes"
          readOnly={true}
        />

        <Input
          name="outras_alergias"
          defaultValue={aluno.patologias.outras_patologias}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Patologias"
          variant="outlined"
        />
      </ContainerCheckbox>

      <ContainerCheckbox>
        <FormLabel component="legend">Patologias Familia</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly={true}
              defaultChecked={
                aluno.patologias_familia.fam_doenca_cardiovascular
              }
              color="primary"
              onClick={e => e.preventDefault()}
            />
          }
          label="Doença Cardiovascular"
          name="doenca_cardiovascular"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias_familia.fam_hipertensao}
              color="primary"
            />
          }
          label="Hipertensão Arterial"
          name="hipertensao_arterial"
          readOnly={true}
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias_familia.fam_obesidade}
              color="primary"
            />
          }
          label="Obesidade"
          name="obesidade"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias_familia.fam_dislipidemias}
              color="primary"
            />
          }
          label="Dislipidemias"
          name="dislipidemias"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={
                aluno.patologias_familia.fam_doenca_arterial_coronariana
              }
              color="primary"
            />
          }
          label="Doença Arterial Coronariana"
          name="doenca_arterial_coronariana"
          readOnly={true}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={aluno.patologias_familia.fam_diabetes}
              color="primary"
            />
          }
          label="Diabetes"
          name="diabetes"
          readOnly={true}
        />

        <Input
          name="outras_alergias"
          defaultValue={aluno.patologias_familia.patologias_familia_outras}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Patologias"
          variant="outlined"
        />
      </ContainerCheckbox>
    </ContainerDadosAluno>
  );
}
