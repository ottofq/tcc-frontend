import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function Vegetariano({ data }) {
  const nivel_fisico = [
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
        data={nivel_fisico}
        margin={{ top: 20, right: 120, bottom: 20, left: 0 }}
        colors={{ scheme: 'nivo' }}
      />
    </>
  );
}
