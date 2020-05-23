import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function ConsumoBebidaAlcoolica({ data }) {
  const consumo_bebida_alcoolica = [
    {
      id: 'Diariamente',
      label: 'Diariamente',
      value: data.porcentagem.diariamente,
    },
    {
      id: 'de 3-6 vezes na semana',
      label: 'de 3-6 vezes na semana',
      value: data.porcentagem.semana_3vezes,
    },
    {
      id: 'de 1-2 vezes na semana',
      label: 'de 1-2 vezes na semana',
      value: data.porcentagem.semana_1vez,
    },
    {
      id: 'Raramente',
      label: 'Raramente',
      value: data.porcentagem.raramente,
    },
    {
      id: 'Não Consome',
      label: 'Não Consome',
      value: data.porcentagem.nao_consome,
    },
  ];

  return (
    <>
      <h2>Consumo de Bebida Alcoólica</h2>
      <Pie
        data={consumo_bebida_alcoolica}
        margin={{ top: 20, right: 120, bottom: 20, left: 170 }}
        colors={{ scheme: 'reds' }}
      />
    </>
  );
}
