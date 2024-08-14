// reducers/userReducer.ts
import { LOGIN_SUCCESS } from '../actions/authActions';

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
