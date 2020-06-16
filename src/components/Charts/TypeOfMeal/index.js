import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function TypeOfMeal({ data }) {
  const typeOfMeals = [
    {
      id: 'Almoço',
      label: 'Almoço',
      value: data.porcentagem.almoco,
    },
    {
      id: 'Jantar',
      label: 'Jantar',
      value: data.porcentagem.jantar,
    },
    {
      id: 'Almoço e Jantar',
      label: 'Almoço e Jantar',
      value: data.porcentagem.almoco_jantar,
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
