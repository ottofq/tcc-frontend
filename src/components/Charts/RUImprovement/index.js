import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function RUImprovement({ data, amountOfStudents }) {
  const RUImprovements = [
    {
      melhoria: 'CP',
      Cardápio: data.totais.cardapio,
    },
    {
      melhoria: 'SP',
      'Sabor das preparações': data.totais.sabor_preparacao,
    },
    {
      melhoria: 'MOV',
      'Mais opção vegetariana': data.totais.opcao_vegetariana,
    },
    {
      melhoria: 'EF',
      'Estrutura física do RU': data.totais.estrutura_fisica,
    },
    {
      melhoria: 'TF',
      'Tempo de espera na fila': data.totais.tempo_fila,
    },
    {
      melhoria: 'PT',
      'Preço Ticket': data.totais.preco_ticket,
    },
    {
      melhoria: 'OM',
      'Outras melhorias': data.totais.melhoria_outros,
    },
  ];

  return (
    <>
      <h2>Melhorias no RU</h2>
      <Bar
        data={RUImprovements}
        keys={[
          'Outras melhorias',
          'Preço Ticket',
          'Tempo de espera na fila',
          'Estrutura física do RU',
          'Mais opção vegetariana',
          'Sabor das preparações',
          'Cardápio',
        ]}
        indexBy="melhoria"
        margin={{ top: 20, right: 180, bottom: 50, left: 35 }}
        colors={{ scheme: 'category10' }}
        legendBottom="Melhorias"
        legendLeft="Total de Alunos"
        legendOffset={30}
        maxValue={amountOfStudents}
      />
    </>
  );
}

RUImprovement.propTypes = {
  amountOfStudents: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
