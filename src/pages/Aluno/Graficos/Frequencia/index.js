import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function Frequencia({ data }) {
  const frequencia = [
    {
      id: 'Todos os dias',
      label: 'Todos os dias',
      value: Math.round(data.porcentagem.todo_dia),
    },
    {
      id: 'Pelo menos 3 vezes na semana',
      label: 'Pelo menos 3 vezes na semana',
      value: Math.round(data.porcentagem.semana_3vezes),
    },
    {
      id: 'Pelo menos 1 vez na semana',
      label: 'Pelo menos 1 vez na semana',
      value: Math.round(data.porcentagem.semana_1vez),
    },
    {
      id: 'Raramente',
      label: 'Raramente',
      value: Math.round(data.porcentagem.raramente),
    },
  ];

  return (
    <>
      <h2>Frequência de refeição no RU</h2>
      <Pie
        data={frequencia}
        margin={{ top: 20, right: 70, bottom: 20, left: 150 }}
        colors={{ scheme: 'nivo' }}
      />
    </>
  );
}
