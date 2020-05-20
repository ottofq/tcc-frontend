import React from 'react';
import Bar from '../../../../components/Charts/Bar';

export default function Alergia({ data, quantAluno }) {
  const alergia = [
    {
      alergia: 'Alergia a Glúten',
      'Alergia a Glúten': Math.round(data.totais.alergia_gluten),
    },
    {
      alergia: 'Intolerância a lactose',
      'Intolerância a lactose': Math.round(data.totais.intolerancia_lactose),
    },
    {
      alergia: 'Proteína Leite da Vaca',
      'Proteína Leite da Vaca': Math.round(data.totais.proteina_leite_vaca),
    },
    {
      alergia: 'Outras Alergias',
      'Outras Alergias': Math.round(data.totais.outras_alergias),
    },
  ];
  return (
    <>
      <h2>Alergias</h2>
      <Bar
        data={alergia}
        keys={[
          'Alergia a Glúten',
          'Intolerância a lactose',
          'Proteína Leite da Vaca',
          'Outras Alergias',
        ]}
        indexBy="alergia"
        margin={{ top: 20, right: 180, bottom: 60, left: 50 }}
        legendBottom="Alergias"
        colors={{ scheme: 'nivo' }}
        legendLeft="Total de Alunos"
        maxValue={quantAluno}
      />
    </>
  );
}
