import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // 경로가 올바른지 확인

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
