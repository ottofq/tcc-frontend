export const fetchCharts = () => {
  return {
    type: 'chart:FETCH_CHARTS',
  };
};

export const fetchChartsSuccess = (charts, totalStudents) => {
  return {
    type: 'chart:FETCH_CHARTS_SUCCESS',
    payload: { charts, totalStudents },
  };
};

export const fetchChartsFailure = () => {
  return {
    type: 'chart:FETCH_CHARTS_FAILURE',
  };
};
