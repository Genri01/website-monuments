import { combineReducers } from 'redux';
import header from './header'
import app from './app'
import cart from './cart'

const rootReducer = combineReducers({
  header,
  app,
  cart
});

export default rootReducer;