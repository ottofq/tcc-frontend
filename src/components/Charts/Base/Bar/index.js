/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

export default function Bar({
  legendBottom,
  tickRotation,
  legendOffset,
  legendLeft,
  ...rest
}) {
  return (
    <ResponsiveBar
      {...rest}
      padding={0.3}
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
      legends={[
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
      ]}
      animate
      motionStiffness={90}
      motionDamping={15}
    />
  );
}

Bar.defaultProps = {
  tickRotation: 0,
  legendOffset: 50,
};

Bar.propTypes = {
  legendBottom: PropTypes.string.isRequired,
  tickRotation: PropTypes.number,
  legendOffset: PropTypes.number,
  legendLeft: PropTypes.string.isRequired,
};
