import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function Tabagista({ data }) {
  const tabagista = [
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
        data={tabagista}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        colors={{ scheme: 'set3' }}
      />
    </>
  );
}
