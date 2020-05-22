import React from 'react';
import Bar from '../../../../components/Charts/Bar';

export default function MelhoriaRU({ data, quantAluno }) {
  const melhoria_ru = [
    {
      melhoria: 'Cardápio',
      Cardápio: data.totais.cardapio,
    },
    {
      melhoria: 'Sabor das preparações',
      'Sabor das preparações': data.totais.sabor_preparacao,
    },
    {
      melhoria: 'Mais opção vegetariana',
      'Mais opção vegetariana': data.totais.opcao_vegetariana,
    },
    {
      melhoria: 'Estrutura física do RU',
      'Estrutura física do RU': data.totais.estrutura_fisica,
    },
    {
      melhoria: 'Tempo de espera na fila',
      'Tempo de espera na fila': data.totais.tempo_fila,
    },
    {
      melhoria: 'Preço Ticket',
      'Preço Ticket': data.totais.preco_ticket,
    },
    {
      melhoria: 'Outras melhorias',
      'Outras melhorias': data.totais.melhoria_outros,
    },
  ];

  return (
    <>
      <h2>Melhorias no RU</h2>
      <Bar
        data={melhoria_ru}
        keys={[
          'Cardápio',
          'Sabor das preparações',
          'Mais opção vegetariana',
          'Estrutura física do RU',
          'Tempo de espera na fila',
          'Preço Ticket',
          'Outras melhorias',
        ]}
        indexBy="melhoria"
        margin={{ top: 20, right: 180, bottom: 55, left: 60 }}
        colors={{ scheme: 'spectral' }}
        legendBottom="Melhorias"
        legendLeft="Total de Alunos"
        maxValue={quantAluno}
      />
    </>
  );
}
