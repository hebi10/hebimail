import { Dispatch } from 'redux';
import { instance as axios } from '../../services/api';
import { AuthActionTypes, AuthAction, User } from '../types';
import { useUserQuery } from '../../queries/useUserQuery'; // React Query 훅을 불러옵니다.

// 로그인 액션
export const login = ({id, password}: {id: string, password: string}) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({ type: AuthActionTypes.LOGIN_REQUEST });

    const { data } = await axios.post('/auth/login', { id, password });

    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: data });

    // React Query 훅을 통해 사용자 정보를 가져와 Redux에 저장합니다.
    const { data: userData } = await useUserQuery();
    dispatch({ type: AuthActionTypes.SET_USER_INFO, payload: userData });
  } catch (error) {
    let errorMessage;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error); // Error 객체가 아니면 문자열로 변환
    }

    dispatch({
      type: AuthActionTypes.LOGIN_FAILURE,
      payload: errorMessage,
    });
  }
};


// 로그아웃 액션
export const logout = () => (dispatch: Dispatch<AuthAction>) => {
  // localStorage에서 JWT 토큰과 사용자 정보 삭제
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');

  // 상태를 초기화
  dispatch({ type: AuthActionTypes.LOGOUT });
};
