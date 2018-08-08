import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, CLEAR_ERROR, GET_FEATURE } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    callback();
  } catch(e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data.error,
    });
  }
};

export const signout = () => {
  return {
    type: AUTH_USER,
    payload: '',
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);
    dispatch({
      type: AUTH_USER,
      payload: response.data.token,
    });
    callback();
  } catch(e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data.error,
    });
  }
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}

export const getFeature = (token, redirect) => async dispatch => {
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3090/feature',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });
    dispatch({
      type: GET_FEATURE,
      payload: response.data.feature,
    });
  } catch(e) {
    dispatch({
      type: AUTH_ERROR,
      payload: e.response.data.error,
    });
    redirect();
  }
}
