import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';

export default function Pie({ data, margin, colors }) {
  const format = item =>
    `${new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      maximumSignificantDigits: 4,
    }).format(item.value)}%`;

  const formatTooltip = item =>
    `${new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      maximumSignificantDigits: 4,
    }).format(item)}%`;

  return (
    <ResponsivePie
      data={data}
      pixelRatio={1}
      margin={margin}
      sliceLabel={format}
      tooltipFormat={formatTooltip}
      startAngle={-180}
      innerRadius={0.5}
      endAngle={360}
      padAngle={0.7}
      cornerRadius={3}
      colors={colors}
      sortByValue
      borderWidth={1}
      enableRadialLabels={false}
      radialLabelsSkipAngle={0}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={12}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      slicesLabelsSkipAngle={10}
      legends={[
        {
          anchor: 'top-right',
          direction: 'column',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          itemsSpacing: 20,
          symbolShape: 'square',
        },
      ]}
    />
  );
}

Pie.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  colors: PropTypes.shape({
    scheme: PropTypes.string.isRequired,
  }).isRequired,
};
