/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

api.interceptors.request.use(config => {
  const auth = JSON.parse(localStorage.getItem('persist:@app-ru/auth'));

  if (auth.token) {
    config.headers.authorization = `Bearer ${auth.token}`;
  }

  return config;
});

export default api;
