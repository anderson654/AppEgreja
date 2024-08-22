import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './reducers/exampleSlice';

const store = combineReducers({
  teste: exampleSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'users/logout') {
    state = undefined;
  }
  return store(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
