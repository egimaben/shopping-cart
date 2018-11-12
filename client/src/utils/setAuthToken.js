import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  }
  delete axios.defaults.headers.common.Authorization;
};
