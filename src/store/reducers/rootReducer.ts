import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    products: productReducer,
    auth: authReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
