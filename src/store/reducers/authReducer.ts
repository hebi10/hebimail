import { AuthState, AuthActionTypes, AuthAction } from '../types';

const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo') as string) 
    : null;

    const initialState: AuthState = {
        userInfo: userInfoFromStorage,
        user: userInfoFromStorage ? userInfoFromStorage.user : null, 
        loading: false,
        error: null,
        token: null,
    };

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return { ...state, loading: true };
        case AuthActionTypes.LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case AuthActionTypes.LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case AuthActionTypes.SET_USER_INFO:
            return { ...state, user: action.payload };
        case AuthActionTypes.LOGOUT:
            return { ...state, userInfo: null, user: null };
        default:
            return state;
    }
};
