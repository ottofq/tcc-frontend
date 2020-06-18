import React from 'react';
import PropTypes from 'prop-types';
import Bar from '../Base/Bar';

export default function MealRating({ data }) {
  const mealRatings = [
    {
      avaliacao: 'Aroma',
      'Muito bom': data.porcentagem.aroma.muito_bom,
      Bom: data.porcentagem.aroma.bom,
      Regular: data.porcentagem.aroma.regular,
      Ruim: data.porcentagem.aroma.ruim,
      'Muito ruim': data.porcentagem.aroma.muito_ruim,
    },
    {
      avaliacao: 'Coloração do cardápio',
      'Muito bom': data.porcentagem.coloracao_cardapio.muito_bom,
      Bom: data.porcentagem.coloracao_cardapio.bom,
      Regular: data.porcentagem.coloracao_cardapio.regular,
      Ruim: data.porcentagem.coloracao_cardapio.ruim,
      'Muito ruim': data.porcentagem.coloracao_cardapio.muito_ruim,
    },
    {
      avaliacao: 'Textura da preparação',
      'Muito bom': data.porcentagem.textura_preparacao.muito_bom,
      Bom: data.porcentagem.textura_preparacao.bom,
      Regular: data.porcentagem.textura_preparacao.regular,
      Ruim: data.porcentagem.textura_preparacao.ruim,
      'Muito ruim': data.porcentagem.textura_preparacao.muito_ruim,
    },
    {
      avaliacao: 'Sabor',
      'Muito bom': data.porcentagem.sabor.muito_bom,
      Bom: data.porcentagem.sabor.bom,
      Regular: data.porcentagem.sabor.regular,
      Ruim: data.porcentagem.sabor.ruim,
      'Muito ruim': data.porcentagem.sabor.muito_ruim,
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
    porcentagem: PropTypes.shape({
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
