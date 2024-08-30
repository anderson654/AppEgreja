import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './reducers/exampleSlice';
import menuHome from './reducers/menuHome';
import menuProfile from './reducers/menuProfile';
import user from './reducers/user';

const store = combineReducers({
  teste: exampleSlice,
  menuHome,
  menuProfile,
  user
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
