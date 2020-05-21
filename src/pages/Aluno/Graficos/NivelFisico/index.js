import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function NivelFisico({ data }) {
  const nivel_fisico = [
    {
      id: 'Sedentário',
      label: 'Sedentário',
      value: data.porcentagem.sedentario,
    },
    {
      id: 'Leve',
      label: 'Leve',
      value: data.porcentagem.leve,
    },
    {
      id: 'Moderado',
      label: 'Moderado',
      value: data.porcentagem.moderado,
    },
    {
      id: 'Ativo',
      label: 'Ativo',
      value: data.porcentagem.ativo,
    },
  ];

  return (
    <>
      <h2>Nível de Atividade Física</h2>
      <Pie
        data={nivel_fisico}
        margin={{ top: 20, right: 120, bottom: 20, left: 170 }}
        colors={{ scheme: 'pastel1' }}
      />
    </>
  );
}
