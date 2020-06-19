import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

import * as S from './styles';

export default function Allergies({ student }) {
  return (
    <S.ContainerStudentData>
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

      <S.Input
        name="outras_alergias"
        defaultValue={student.alergias.outras_alergias}
        InputProps={{
          readOnly: true,
        }}
        label="Outras Alergias"
        variant="outlined"
      />
      <S.Input
        name="medicamento_continuo"
        defaultValue={student.medicamento_continuo}
        InputProps={{
          readOnly: true,
        }}
        label="Medicamento Continuo"
        variant="outlined"
      />
    </S.ContainerStudentData>
  );
}

Allergies.propTypes = {
  student: PropTypes.shape({
    alergias: PropTypes.shape({
      nenhuma: PropTypes.bool,
      alergia_gluten: PropTypes.bool,
      intolerancia_lactose: PropTypes.bool,
      proteina_leite_vaca: PropTypes.bool,
      outras_alergias: PropTypes.string,
    }),
    medicamento_continuo: PropTypes.string,
  }).isRequired,
};
