import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default function Bar({
  data,
  margin,
  maxValue,
  keys,
  legendBottom,
  legendLeft,
  indexBy,
  colors,
}) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      maxValue={maxValue}
      margin={margin}
      padding={0.3}
      colors={colors}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -15,
        legend: legendBottom,
        legendPosition: 'middle',
        legendOffset: 45,
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
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
}
