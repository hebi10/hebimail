import axios from '../../services/api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { Dispatch } from 'redux';

interface Credentials {
  id: string;
  password: string;
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (
  credentials: Credentials
): ThunkAction<void, RootState, unknown, any> => async (
  dispatch: Dispatch
) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('/auth/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: 'An unknown error occurred' });
    }
  }
};

export const logout = (): ThunkAction<void, RootState, unknown, any> => async (
  dispatch: Dispatch
) => {
  try {
    await axios.post('/auth/logout');
    dispatch({ type: LOGOUT });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Logout failed:', error.message);
    } else {
      console.error('Logout failed: An unknown error occurred');
    }
  }
};
