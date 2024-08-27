import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './reducers/exampleSlice';
import menuHome from './reducers/menuHome';
import menuProfile from './reducers/menuProfile';

const store = combineReducers({
  teste: exampleSlice,
  menuHome,
  menuProfile
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
