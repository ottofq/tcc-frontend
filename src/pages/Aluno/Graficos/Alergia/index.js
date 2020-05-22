import React from 'react';
import Bar from '../../../../components/Charts/Bar';

export default function Alergia({ data, quantAluno }) {
  const alergia = [
    {
      alergia: 'AG',
      'AG - Alergia a Glúten': data.totais.alergia_gluten,
    },
    {
      alergia: 'IL',
      'IL - Intolerância a Lactose': data.totais.intolerancia_lactose,
    },
    {
      alergia: 'PLV',
      'PLV - Proteína Leite da Vaca': data.totais.proteina_leite_vaca,
    },
    {
      alergia: 'OA',
      'OA - Outras Alergias': data.totais.outras_alergias,
    },
  ];
  return (
    <>
      <h2>Alergias</h2>
      <Bar
        data={alergia}
        keys={[
          'OA - Outras Alergias',
          'PLV - Proteína Leite da Vaca',
          'IL - Intolerância a Lactose',
          'AG - Alergia a Glúten',
        ]}
        indexBy="alergia"
        margin={{ top: 20, right: 200, bottom: 50, left: 35 }}
        legendBottom="Alergias"
        legendOffset={30}
        colors={{ scheme: 'nivo' }}
        legendLeft="Total de Alunos"
        maxValue={quantAluno}
      />
    </>
  );
}
