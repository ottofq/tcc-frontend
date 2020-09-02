import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function GeneralRating({ data }) {
  const generalRatings = [
    {
      id: 'Muito bom',
      label: 'Muito bom',
      value: data.totais.muito_bom,
    },
    {
      id: 'Bom',
      label: 'Bom',
      value: data.totais.bom,
    },
    {
      id: 'Regular',
      label: 'Regular',
      value: data.totais.regular,
    },
    {
      id: 'Ruim',
      label: 'Ruim',
      value: data.totais.ruim,
    },
    {
      id: 'Muito ruim',
      label: 'Muito ruim',
      value: data.totais.muito_ruim,
    },
  ];

  return (
    <>
      <h2>Avaliação geral da refeição servida no RU</h2>
      <Pie
        data={generalRatings}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'set3' }}
      />
    </>
  );
}

GeneralRating.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      muito_bom: PropTypes.number,
      bom: PropTypes.number,
      regular: PropTypes.number,
      ruim: PropTypes.number,
      muito_ruim: PropTypes.number,
    }),
  }).isRequired,
};
