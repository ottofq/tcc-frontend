import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function Allergy({ data, amountStudent }) {
  const alergia = [
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
        data={alergia}
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
        maxValue={amountStudent}
      />
    </>
  );
}

Allergy.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      alergia_gluten: PropTypes.number,
      intolerancia_lactose: PropTypes.number,
      proteina_leite_vaca: PropTypes.number,
      outras_alergias: PropTypes.number,
    }),
  }).isRequired,
  amountStudent: PropTypes.number.isRequired,
};
