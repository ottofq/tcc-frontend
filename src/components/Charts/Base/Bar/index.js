/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

export default function Bar({
  margin,
  legendBottom,
  tickRotation,
  legendOffset,
  legendLeft,
  ...rest
}) {
  const [handleMargin, setHandleMargin] = useState(margin);
  const [legend, setLegend] = useState([
    {
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ]);
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (windowDimensions.width <= 720) {
      setHandleMargin({ top: 20, right: 0, bottom: 70, left: 40 });
      setLegend([]);
    }
  }, [windowDimensions]);

  return (
    <ResponsiveBar
      {...rest}
      padding={0.3}
      margin={handleMargin}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation,
        legend: legendBottom,
        legendPosition: 'middle',
        legendOffset,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        legend: legendLeft,
        legendPosition: 'middle',
        legendOffset: -30,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={legend}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  );
}

Bar.defaultProps = {
  margin: { top: 20, right: 0, bottom: 70, left: 40 },
  tickRotation: 0,
  legendOffset: 50,
};

Bar.propTypes = {
  margin: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
  legendBottom: PropTypes.string.isRequired,
  tickRotation: PropTypes.number,
  legendOffset: PropTypes.number,
  legendLeft: PropTypes.string.isRequired,
};
