import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function Smoker({ data }) {
  const smokers = [
    {
      id: 'Tabagista',
      label: 'Tabagista',
      value: data.porcentagem.tabagista,
    },
    {
      id: 'Não Tabagista',
      label: 'Não Tabagista',
      value: data.porcentagem.nao_tabagista,
    },
  ];

  return (
    <>
      <h2>Tabagista</h2>
      <Pie
        data={smokers}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        colors={{ scheme: 'set2' }}
      />
    </>
  );
}

Smoker.propTypes = {
  data: PropTypes.shape({
    porcentagem: PropTypes.shape({
      tabagista: PropTypes.number,
      nao_tabagista: PropTypes.number,
    }),
  }).isRequired,
};
