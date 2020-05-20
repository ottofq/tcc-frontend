import React from 'react';

import Pie from '../../../../components/Charts/Pie';

export default function Bolsista({ data }) {
  const bolsista = [
    {
      id: 'Bolsa Integral',
      label: 'Bolsa Integral',
      value: data.porcentagem.bolsa_integral,
    },
    {
      id: 'Bolsa Parcial',
      label: 'Bolsa Parcial',
      value: data.porcentagem.bolsa_parcial,
    },
    {
      id: 'Não Bolsista',
      label: 'Não Bolsista',
      value: data.porcentagem.nao_bolsista,
    },
  ];

  return (
    <>
      <h2>Bolsistas</h2>
      <Pie
        data={bolsista}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'set1' }}
      />
    </>
  );
}
