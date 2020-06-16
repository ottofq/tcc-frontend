import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function FrenquencyOfMeals({ data }) {
  const frenquencyOfMeals = [
    {
      id: 'Todos os dias',
      label: 'Todos os dias',
      value: data.porcentagem.todo_dia,
    },
    {
      id: 'Pelo menos 3 vezes na semana',
      label: 'Pelo menos 3 vezes na semana',
      value: data.porcentagem.semana_3vezes,
    },
    {
      id: 'Pelo menos 1 vez na semana',
      label: 'Pelo menos 1 vez na semana',
      value: data.porcentagem.semana_1vez,
    },
    {
      id: 'Raramente',
      label: 'Raramente',
      value: data.porcentagem.raramente,
    },
  ];

  return (
    <>
      <h2>Frequência de refeição no RU</h2>
      <Pie
        data={frenquencyOfMeals}
        margin={{ top: 20, right: 100, bottom: 20, left: 10 }}
        colors={{ scheme: 'nivo' }}
      />
    </>
  );
}

FrenquencyOfMeals.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
