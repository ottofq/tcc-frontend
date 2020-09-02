import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function AlcoholicBeverageConsumption({ data }) {
  const alcoholicBeverageConsumption = [
    {
      id: 'Diariamente',
      label: 'Diariamente',
      value: data.totais.diariamente,
    },
    {
      id: 'de 3-6 vezes na semana',
      label: 'de 3-6 vezes na semana',
      value: data.totais.semana_3vezes,
    },
    {
      id: 'de 1-2 vezes na semana',
      label: 'de 1-2 vezes na semana',
      value: data.totais.semana_1vez,
    },
    {
      id: 'Raramente',
      label: 'Raramente',
      value: data.totais.raramente,
    },
    {
      id: 'Não Consome',
      label: 'Não Consome',
      value: data.totais.nao_consome,
    },
  ];

  return (
    <>
      <h2>Consumo de Bebida Alcoólica</h2>
      <Pie
        data={alcoholicBeverageConsumption}
        margin={{ top: 20, right: 80, bottom: 20, left: 20 }}
        colors={{ scheme: 'set3' }}
      />
    </>
  );
}
AlcoholicBeverageConsumption.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      diariamente: PropTypes.number,
      semana_3vezes: PropTypes.number,
      semana_1vez: PropTypes.number,
      raramente: PropTypes.number,
      nao_consome: PropTypes.number,
    }),
  }).isRequired,
};
