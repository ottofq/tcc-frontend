import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

import * as S from './styles';

const Pathologies = ({ student }) => {
  return (
    <>
      <S.ContainerCheckbox>
        <FormLabel component="legend">Patologias</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly
              checked={student.patologias.doenca_cardiovascular}
              color="primary"
            />
          }
          label="Doença Cardiovascular"
          name="doenca_cardiovascular"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias.hipertensao_arterial}
              color="primary"
            />
          }
          label="Hipertensão Arterial"
          name="hipertensao_arterial"
          readOnly
        />

        <FormControlLabel
          control={
            <Checkbox checked={student.patologias.obesidade} color="primary" />
          }
          label="Obesidade"
          name="obesidade"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias.dislipidemias}
              color="primary"
            />
          }
          label="Dislipidemias"
          name="dislipidemias"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias.doenca_arterial_coronariana}
              color="primary"
            />
          }
          label="Doença Arterial Coronariana"
          name="doenca_arterial_coronariana"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox checked={student.patologias.diabetes} color="primary" />
          }
          label="Diabetes"
          name="diabetes"
          readOnly
        />

        <S.Input
          name="outras_alergias"
          value={student.patologias.outras_patologias || ''}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Patologias"
          variant="outlined"
        />
      </S.ContainerCheckbox>

      <S.ContainerCheckbox>
        <FormLabel component="legend">Patologias Familia</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              readOnly
              checked={student.patologias_familia.fam_doenca_cardiovascular}
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
              checked={student.patologias_familia.fam_hipertensao}
              color="primary"
            />
          }
          label="Hipertensão Arterial"
          name="hipertensao_arterial"
          readOnly
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias_familia.fam_obesidade}
              color="primary"
            />
          }
          label="Obesidade"
          name="obesidade"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias_familia.fam_dislipidemias}
              color="primary"
            />
          }
          label="Dislipidemias"
          name="dislipidemias"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={
                student.patologias_familia.fam_doenca_arterial_coronariana
              }
              color="primary"
            />
          }
          label="Doença Arterial Coronariana"
          name="doenca_arterial_coronariana"
          readOnly
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={student.patologias_familia.fam_diabetes}
              color="primary"
            />
          }
          label="Diabetes"
          name="diabetes"
          readOnly
        />

        <S.Input
          name="outras_patologias"
          value={student.patologias_familia.patologias_familia_outras || ''}
          InputProps={{
            readOnly: true,
          }}
          label="Outras Patologias"
          variant="outlined"
        />
      </S.ContainerCheckbox>
    </>
  );
};

Pathologies.propTypes = {
  student: PropTypes.shape({
    patologias: PropTypes.shape({
      doenca_cardiovascular: PropTypes.bool,
      hipertensao_arterial: PropTypes.bool,
      obesidade: PropTypes.bool,
      dislipidemias: PropTypes.bool,
      doenca_arterial_coronariana: PropTypes.bool,
      diabetes: PropTypes.bool,
      outras_patologias: PropTypes.string,
    }),
    patologias_familia: PropTypes.shape({
      fam_doenca_cardiovascular: PropTypes.bool,
      fam_hipertensao: PropTypes.bool,
      fam_obesidade: PropTypes.bool,
      fam_dislipidemias: PropTypes.bool,
      fam_doenca_arterial_coronariana: PropTypes.bool,
      fam_diabetes: PropTypes.bool,
      patologias_familia_outras: PropTypes.string,
    }),
  }).isRequired,
};

export default Pathologies;
