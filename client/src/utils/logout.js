import { setAuthToken } from './setAuthToken';

export const logout = () => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('userProfile')
    setAuthToken(undefined);
};