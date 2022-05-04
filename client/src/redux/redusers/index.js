import { combineReducers } from 'redux';
import header from './header'
import app from './app'

const rootReducer = combineReducers({
  header,
  app
});

export default rootReducer;