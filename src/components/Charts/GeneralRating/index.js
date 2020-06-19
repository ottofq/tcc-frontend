import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function GeneralRating({ data }) {
  const generalRatings = [
    {
      id: 'Muito bom',
      label: 'Muito bom',
      value: data.porcentagem.muito_bom,
    },
    {
      id: 'Bom',
      label: 'Bom',
      value: data.porcentagem.bom,
    },
    {
      id: 'Regular',
      label: 'Regular',
      value: data.porcentagem.regular,
    },
    {
      id: 'Ruim',
      label: 'Ruim',
      value: data.porcentagem.ruim,
    },
    {
      id: 'Muito ruim',
      label: 'Muito ruim',
      value: data.porcentagem.muito_ruim,
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
    porcentagem: PropTypes.shape({
      muito_bom: PropTypes.number,
      bom: PropTypes.number,
      regular: PropTypes.number,
      ruim: PropTypes.number,
      muito_ruim: PropTypes.number,
    }),
  }).isRequired,
};
