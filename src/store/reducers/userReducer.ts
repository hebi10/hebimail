import { UserActionTypes, UserAction, UserState } from '../types';

const initialState: UserState = {
    loading: false,
    userDetails: null, // userInfo 대신 userDetails 사용
    error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case UserActionTypes.USER_DETAILS_SUCCESS:
            return { ...state, loading: false, userDetails: action.payload }; // userInfo 대신 userDetails 사용
        case UserActionTypes.USER_DETAILS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
