import { configureStore, combineReducers } from '@reduxjs/toolkit';
import menuHome from './reducers/menuHome';
import menuProfile from './reducers/menuProfile';
import user from './reducers/user';
import alertSnackBar from './reducers/alertSnackBar';
import loginContext from './reducers/loginContext';
import modals from './reducers/modals';
import servicesAndCategories from './reducers/servicesAndCategories';
import home from './reducers/home';
import cacheServices from './reducers/cacheServices';
import defaultConsts from './reducers/defaultConsts';

const store = combineReducers({
  alertSnackBar,
  menuHome,
  menuProfile,
  loginContext,
  user,
  modals,
  servicesAndCategories,
  home,
  cacheServices,
  defaultConsts
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
