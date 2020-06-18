import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function Vegan({ data }) {
  const vegans = [
    {
      id: 'Ovolactovegetariano',
      label: 'Ovolactovegetariano',
      value: data.porcentagem.ovolactovegetariano,
    },
    {
      id: 'Vegetariano restrito – alimentação',
      label: 'Vegetariano restrito – alimentação',
      value: data.porcentagem.vegetariano_restrito,
    },
    {
      id: 'Vegano',
      label: 'Vegano',
      value: data.porcentagem.vegano,
    },
    {
      id: 'Não vegano/vegetariano',
      label: 'Não vegano/vegetariano',
      value: data.porcentagem.nao_vegano,
    },
  ];

  return (
    <>
      <h2>Veganos ou Vegetarianos</h2>
      <Pie
        data={vegans}
        margin={{ top: 20, right: 120, bottom: 20, left: 0 }}
        colors={{ scheme: 'nivo' }}
      />
    </>
  );
}

Vegan.propTypes = {
  data: PropTypes.shape({
    porcentagem: PropTypes.shape({
      ovolactovegetariano: PropTypes.number,
      vegetariano_restrito: PropTypes.number,
      vegano: PropTypes.number,
      nao_vegano: PropTypes.number,
    }),
  }).isRequired,
};
