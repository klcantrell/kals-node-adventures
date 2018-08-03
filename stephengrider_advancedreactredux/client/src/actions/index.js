import axios from 'axios';
import { AUTH_USER } from './types';

export const signup = formProps => {
  const signupPromise = axios.post('http://localhost:3090/signup', {
    formProps,
  });
  return {
    type: AUTH_USER,
    payload: signupPromise,
  };
};