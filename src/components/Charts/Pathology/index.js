import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function Pathology({ data, totalStudents }) {
  const pathologies = [
    {
      patologia: 'DC',
      'DC - Doença Cardiovascular': data.totais.doenca_cardiovascular,
    },
    {
      patologia: 'HA',
      'HA - Hipertensão Arterial': data.totais.hipertensao_arterial,
    },
    {
      patologia: 'OB',
      'OB - Obesidade': data.totais.obesidade,
    },
    {
      patologia: 'DP',
      'DP - Dislipidemias': data.totais.dislipidemias,
    },
    {
      patologia: 'DAC',
      'DAC - Doença Arterial Coronariana':
        data.totais.doenca_arterial_coronariana,
    },
    {
      patologia: 'DB',
      'DB - Diabetes': data.totais.diabetes,
    },
    {
      patologia: 'OP',
      'OP - Outras Patologias': data.totais.outras_patologias,
    },
  ];

  return (
    <>
      <h2>Patologias</h2>
      <Bar
        data={pathologies}
        keys={[
          'OP - Outras Patologias',
          'DB - Diabetes',
          'DAC - Doença Arterial Coronariana',
          'DP - Dislipidemias',
          'OB - Obesidade',
          'HA - Hipertensão Arterial',
          'DC - Doença Cardiovascular',
        ]}
        indexBy="patologia"
        margin={{ top: 20, right: 250, bottom: 50, left: 35 }}
        legendOffset={30}
        colors={{ scheme: 'paired' }}
        legendBottom="Patologias"
        legendLeft="Total de Alunos"
        maxValue={totalStudents}
      />
    </>
  );
}

Pathology.propTypes = {
  totalStudents: PropTypes.number.isRequired,
  data: PropTypes.shape({
    totais: PropTypes.shape({
      doenca_cardiovascular: PropTypes.number,
      hipertensao_arterial: PropTypes.number,
      obesidade: PropTypes.number,
      dislipidemias: PropTypes.number,
      doenca_arterial_coronariana: PropTypes.number,
      diabetes: PropTypes.number,
      outras_patologias: PropTypes.number,
    }),
  }).isRequired,
};
