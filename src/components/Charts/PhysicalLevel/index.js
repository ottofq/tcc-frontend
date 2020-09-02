import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function PhysicalLevel({ data }) {
  const physicalLevels = [
    {
      id: 'Sedentário',
      label: 'Sedentário',
      value: data.totais.sedentario,
    },
    {
      id: 'Leve',
      label: 'Leve',
      value: data.totais.leve,
    },
    {
      id: 'Moderado',
      label: 'Moderado',
      value: data.totais.moderado,
    },
    {
      id: 'Ativo',
      label: 'Ativo',
      value: data.totais.ativo,
    },
  ];

  return (
    <>
      <h2>Nível de Atividade Física</h2>
      <Pie
        data={physicalLevels}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: 'pastel1' }}
      />
    </>
  );
}

PhysicalLevel.propTypes = {
  data: PropTypes.shape({
    totais: PropTypes.shape({
      sedentario: PropTypes.number,
      leve: PropTypes.number,
      moderado: PropTypes.number,
      ativo: PropTypes.number,
    }),
  }).isRequired,
};
