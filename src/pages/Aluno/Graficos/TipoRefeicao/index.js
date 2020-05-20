import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function TipoRefeicao({ data }) {
  const frequencia = [
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
      <h2>Frequência de refeição no RU</h2>
      <Pie
        data={frequencia}
        margin={{ top: 20, right: 120, bottom: 20, left: 170 }}
        colors={{ scheme: 'accent' }}
      />
    </>
  );
}
