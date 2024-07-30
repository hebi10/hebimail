import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // 경로가 올바른지 확인

const store = createStore(rootReducer);

export default store;
