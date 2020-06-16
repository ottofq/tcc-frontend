import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

import { ContainerDadosAluno, ContainerCheckbox, Input } from './styles';

export default function Allergies({ student }) {
  return (
    <ContainerDadosAluno>
      <ContainerCheckbox>
        <FormLabel component="legend">Alergias</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly
              defaultChecked={student.alergias.nenhuma}
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
              defaultChecked={student.alergias.alergia_gluten}
              color="primary"
            />
          }
          label="Alergia ao glúten"
          name="alergia_gluten"
          readOnly
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.alergias.intolerancia_lactose}
              color="primary"
            />
          }
          label="Intolerância à lactose"
          name="intolerancia_lactose"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={student.alergias.proteina_leite_vaca}
              color="primary"
            />
          }
          label="Proteína do leite de vaca"
          name="proteina_leite_vaca"
          readOnly
        />

        <Input
          name="outras_alergias"
          defaultValue={student.alergias.outras_alergias}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Alergias"
          variant="outlined"
        />
        <Input
          name="medicamento_continuo"
          defaultValue={student.medicamento_continuo}
          InputProps={{
            readOnly: true,
          }}
          label="Medicamento Continuo"
          variant="outlined"
        />
      </ContainerCheckbox>
    </ContainerDadosAluno>
  );
}

Allergies.propTypes = {
  student: PropTypes.objectOf(PropTypes.object).isRequired,
};
