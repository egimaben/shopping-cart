import { setAuthToken } from './setAuthToken';

const errorMessage = 'failed+to+create+user+token';

const thereIsToken = () => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    return true;
  }
};

export const isLoggedIn = () => {
  if (thereIsToken()) {
    return true;
  }
  const token = window.location.search.split('=')[1];
  if (token === errorMessage || token === undefined) {
    return false;
  }

  localStorage.setItem('jwtToken', token);
  setAuthToken(token);
  return true;
};