import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function Allergy({ data, amountOfStudents }) {
  const allergys = [
    {
      alergia: 'AG',
      'AG - Alergia a Glúten': data.totais.alergia_gluten,
    },
    {
      alergia: 'IL',
      'IL - Intolerância a Lactose': data.totais.intolerancia_lactose,
    },
    {
      alergia: 'PLV',
      'PLV - Proteína Leite da Vaca': data.totais.proteina_leite_vaca,
    },
    {
      alergia: 'OA',
      'OA - Outras Alergias': data.totais.outras_alergias,
    },
  ];
  return (
    <>
      <h2>Alergias</h2>
      <Bar
        data={allergys}
        keys={[
          'OA - Outras Alergias',
          'PLV - Proteína Leite da Vaca',
          'IL - Intolerância a Lactose',
          'AG - Alergia a Glúten',
        ]}
        indexBy="alergia"
        margin={{ top: 20, right: 200, bottom: 50, left: 35 }}
        legendBottom="Alergias"
        legendOffset={30}
        colors={{ scheme: 'nivo' }}
        legendLeft="Total de Alunos"
        maxValue={amountOfStudents}
      />
    </>
  );
}

Allergy.propTypes = {
  amountOfStudents: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
