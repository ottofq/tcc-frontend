/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

api.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('@app-ru/user'));

  if (user) {
    config.headers.authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;
