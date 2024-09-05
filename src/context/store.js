import { configureStore, combineReducers } from '@reduxjs/toolkit';
import menuHome from './reducers/menuHome';
import menuProfile from './reducers/menuProfile';
import user from './reducers/user';
import alertSnackBar from './reducers/alertSnackBar';
import loginContext from './reducers/loginContext';

const store = combineReducers({
  alertSnackBar,
  menuHome,
  menuProfile,
  loginContext,
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
