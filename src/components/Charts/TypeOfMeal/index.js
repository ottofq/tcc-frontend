import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function TypeOfMeal({ data }) {
  const typeOfMeals = [
    {
      id: 'Almoço',
      label: 'Almoço',
      value: data.totais.almoco,
    },
    {
      id: 'Jantar',
      label: 'Jantar',
      value: data.totais.jantar,
    },
    {
      id: 'Almoço e Jantar',
      label: 'Almoço e Jantar',
      value: data.totais.almoco_jantar,
    },
  ];

  return (
    <>
      <h2>Tipo de Refeição consumida no RU</h2>
      <Pie
        data={typeOfMeals}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'accent' }}
      />
    </>
  );
}

TypeOfMeal.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      almoco: PropTypes.number,
      jantar: PropTypes.number,
      almoco_jantar: PropTypes.number,
    }),
  }).isRequired,
};
