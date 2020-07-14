import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

import * as S from './styles';

const Allergies = ({ student }) => {
  return (
    <S.ContainerStudentData>
      <FormLabel component="legend">Alergias</FormLabel>
      <FormControlLabel
        control={
          <Checkbox checked={student.alergias.nenhuma} color="primary" />
        }
        label="Nenhuma Alergia"
        name="alergias_nenhuma"
        readOnly
      />
      <FormControlLabel
        control={
          <Checkbox checked={student.alergias.alergia_gluten} color="primary" />
        }
        label="Alergia ao glúten"
        name="alergia_gluten"
        readOnly
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={student.alergias.intolerancia_lactose}
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
            checked={student.alergias.proteina_leite_vaca}
            color="primary"
          />
        }
        label="Proteína do leite de vaca"
        name="proteina_leite_vaca"
        readOnly
      />

      <S.Input
        name="outras_alergias"
        value={student.alergias.outras_alergias || ''}
        label="Outras Alergias"
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
      />
      <S.Input
        name="medicamento_continuo"
        value={student.medicamento_continuo || ''}
        label="Medicamento Continuo"
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
      />
    </S.ContainerStudentData>
  );
};

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

export default Allergies;
