// src/store/types.ts
import rootReducer from './reducers/rootReducer';

export type RootState = ReturnType<typeof rootReducer>;
