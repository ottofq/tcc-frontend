import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function TipoRefeicao({ data }) {
  const tipo_refeicao = [
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
        data={tipo_refeicao}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'accent' }}
      />
    </>
  );
}
