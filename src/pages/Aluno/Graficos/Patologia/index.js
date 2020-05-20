import React from 'react';
import Bar from '../../../../components/Charts/Bar';

export default function Patologia({ data, quantAluno }) {
  const patologia = [
    {
      patologia: 'Doença Cardiovascular',
      'Doença Cardiovascular': Math.round(data.totais.doenca_cardiovascular),
    },
    {
      patologia: 'Hipertensão Arterial',
      'Hipertensão Arterial': Math.round(data.totais.hipertensao_arterial),
    },
    {
      patologia: 'Obesidade',
      Obesidade: Math.round(data.totais.obesidade),
    },
    {
      patologia: 'Dislipidemias',
      Dislipidemias: Math.round(data.totais.dislipidemias),
    },
    {
      patologia: 'Doença Arterial Coronariana',
      'Doença Arterial Coronariana': Math.round(
        data.totais.doenca_arterial_coronariana
      ),
    },
    {
      patologia: 'Diabetes',
      Diabetes: Math.round(data.totais.diabetes),
    },
    {
      patologia: 'Outras Patologias',
      'Outras Patologias': Math.round(data.totais.outras_patologias),
    },
  ];

  return (
    <>
      <h2>Patologias</h2>
      <Bar
        data={patologia}
        keys={[
          'Doença Cardiovascular',
          'Hipertensão Arterial',
          'Obesidade',
          'Dislipidemias',
          'Doença Arterial Coronariana',
          'Diabetes',
          'Outras Patologias',
        ]}
        indexBy="patologia"
        margin={{ top: 20, right: 210, bottom: 100, left: 100 }}
        colors={{ scheme: 'nivo' }}
        legendBottom="Patologias"
        legendLeft="Total de Alunos"
        maxValue={quantAluno}
      />
    </>
  );
}
