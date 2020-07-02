import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

export default function Pie({ data, margin, colors }) {
  const [handleMargin, setHandleMargin] = useState(margin);
  const [legend, setLegend] = useState([
    {
      anchor: 'top-right',
      direction: 'column',
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemsSpacing: 20,
      symbolShape: 'square',
    },
  ]);
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (windowDimensions.width <= 720) {
      setHandleMargin({ top: 20, right: 0, bottom: 20, left: 0 });
      setLegend([]);
    }
  }, [windowDimensions]);

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
      margin={handleMargin}
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
      legends={legend}
    />
  );
}

Pie.defaultProps = {
  margin: { top: 20, right: 0, bottom: 20, left: 0 },
};

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
  }),
  colors: PropTypes.shape({
    scheme: PropTypes.string.isRequired,
  }).isRequired,
};
