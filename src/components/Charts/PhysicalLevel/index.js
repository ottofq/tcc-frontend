import React from 'react';
import PropTypes from 'prop-types';
import Pie from '../Base/Pie';

export default function PhysicalLevel({ data }) {
  const physicalLevels = [
    {
      id: 'Sedentário',
      label: 'Sedentário',
      value: data.porcentagem.sedentario,
    },
    {
      id: 'Leve',
      label: 'Leve',
      value: data.porcentagem.leve,
    },
    {
      id: 'Moderado',
      label: 'Moderado',
      value: data.porcentagem.moderado,
    },
    {
      id: 'Ativo',
      label: 'Ativo',
      value: data.porcentagem.ativo,
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
    porcentagem: PropTypes.shape({
      sedentario: PropTypes.number,
      leve: PropTypes.number,
      moderado: PropTypes.number,
      ativo: PropTypes.number,
    }),
  }).isRequired,
};
