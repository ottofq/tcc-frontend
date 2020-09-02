import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function RUScholarship({ data }) {
  const RUScholarships = [
    {
      id: 'Bolsa Integral',
      label: 'Bolsa Integral',
      value: data.totais.bolsa_integral,
    },
    {
      id: 'Bolsa Parcial',
      label: 'Bolsa Parcial',
      value: data.totais.bolsa_parcial,
    },
    {
      id: 'Não Bolsista',
      label: 'Não Bolsista',
      value: data.totais.nao_bolsista,
    },
  ];

  return (
    <>
      <h2>Bolsistas</h2>
      <Pie
        data={RUScholarships}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'pastel1' }}
      />
    </>
  );
}

RUScholarship.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      bolsa_integral: PropTypes.number,
      bolsa_parcial: PropTypes.number,
      nao_bolsista: PropTypes.number,
    }),
  }).isRequired,
};
