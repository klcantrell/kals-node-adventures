import { AUTH_USER, AUTH_ERROR, CLEAR_ERROR, GET_FEATURE } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
  feature: '',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH_USER:
      if (action.payload) {
        localStorage.setItem('token', action.payload);
      } else {
        localStorage.removeItem('token');
      }
      return { ...state, authenticated: action.payload};
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload};
    case CLEAR_ERROR:
      return {...state, errorMessage: ''};
    case GET_FEATURE:
      return {...state, feature: action.payload};
    default:
      return state;
  }
};