import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function MealRating({ data }) {
  const mealRatings = [
    {
      avaliacao: 'Aroma',
      'Muito bom': data.totais.aroma.muito_bom,
      Bom: data.totais.aroma.bom,
      Regular: data.totais.aroma.regular,
      Ruim: data.totais.aroma.ruim,
      'Muito ruim': data.totais.aroma.muito_ruim,
    },
    {
      avaliacao: 'Coloração do cardápio',
      'Muito bom': data.totais.coloracao_cardapio.muito_bom,
      Bom: data.totais.coloracao_cardapio.bom,
      Regular: data.totais.coloracao_cardapio.regular,
      Ruim: data.totais.coloracao_cardapio.ruim,
      'Muito ruim': data.totais.coloracao_cardapio.muito_ruim,
    },
    {
      avaliacao: 'Textura da preparação',
      'Muito bom': data.totais.textura_preparacao.muito_bom,
      Bom: data.totais.textura_preparacao.bom,
      Regular: data.totais.textura_preparacao.regular,
      Ruim: data.totais.textura_preparacao.ruim,
      'Muito ruim': data.totais.textura_preparacao.muito_ruim,
    },
    {
      avaliacao: 'Sabor',
      'Muito bom': data.totais.sabor.muito_bom,
      Bom: data.totais.sabor.bom,
      Regular: data.totais.sabor.regular,
      Ruim: data.totais.sabor.ruim,
      'Muito ruim': data.totais.sabor.muito_ruim,
    },
  ];

  const format = item =>
    `${new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      maximumSignificantDigits: 4,
    }).format(item)}%`;

  return (
    <>
      <h2>Avaliação da refeição servida no RU</h2>
      <Bar
        data={mealRatings}
        keys={['Muito ruim', 'Ruim', 'Regular', 'Bom', 'Muito bom']}
        indexBy="avaliacao"
        labelFormat={format}
        tooltipFormat={format}
        margin={{ top: 20, right: 120, bottom: 70, left: 50 }}
        colors={{ scheme: 'nivo' }}
        legendBottom="Avaliações"
        legendLeft="%"
        maxValue={100}
        tickRotation={-8}
      />
    </>
  );
}

MealRating.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      aroma: PropTypes.shape({
        muito_bom: PropTypes.number,
        bom: PropTypes.number,
        regular: PropTypes.number,
        ruim: PropTypes.number,
        muito_ruim: PropTypes.number,
      }),
      coloracao_cardapio: PropTypes.shape({
        muito_bom: PropTypes.number,
        bom: PropTypes.number,
        regular: PropTypes.number,
        ruim: PropTypes.number,
        muito_ruim: PropTypes.number,
      }),
      textura_preparacao: PropTypes.shape({
        muito_bom: PropTypes.number,
        bom: PropTypes.number,
        regular: PropTypes.number,
        ruim: PropTypes.number,
        muito_ruim: PropTypes.number,
      }),
      sabor: PropTypes.shape({
        muito_bom: PropTypes.number,
        bom: PropTypes.number,
        regular: PropTypes.number,
        ruim: PropTypes.number,
        muito_ruim: PropTypes.number,
      }),
    }),
  }).isRequired,
};
