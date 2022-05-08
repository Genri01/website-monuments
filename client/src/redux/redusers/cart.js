import ActionTypes from '../constants';

const initialState = {
  byer_initial_dead: '',
  byer_date_birthday: '',
  byer_date_dead: '',
  byer_file: [],
  install: false,
  byer_initial: '',
  byer_tel: '',
  byer_email: '',
  coment: '',
  addres_region: '',
  addres_city: '',
  addres: '',
  addres_index: '',
  delivery_method: '',
  pay_method: ''
};

export default function cart(state = initialState, { type, payload }) {
 
  switch (type) {
    case ActionTypes.CART_BYER_INITIAL_DEAD:
      return {
        ...state,
        byer_initial_dead: payload
      }; 
    case ActionTypes.CART_BYER_DATE_BERTHDAY:
      return {
        ...state,
        byer_date_birthday: payload
      }; 
    case ActionTypes.CART_BYER_DATE_DEAD:
      return {
        ...state,
        byer_date_dead: payload
      }; 
    case ActionTypes.CART_BYER_FILE:
      return {
        ...state,
        byer_file: payload
      }; 
    case ActionTypes.CART_INSTALL:
      return {
        ...state,
        install: payload
      }; 
    case ActionTypes.CART_BYER_INITIAL:
      return {
        ...state,
        byer_initial: payload
      }; 
    case ActionTypes.CART_BYER_TEL:
      return {
        ...state,
        byer_tel: payload
      }; 
    case ActionTypes.CART_BYER_EMAIL:
      return {
        ...state,
        byer_email: payload
      }; 
    case ActionTypes.CART_COMENT:
      return {
        ...state,
        coment: payload
      }; 
    case ActionTypes.CART_ADDRES_REGION:
      return {
        ...state,
        addres_region: payload
      }; 
    case ActionTypes.CART_ADDRES_CITY:
      return {
        ...state,
        addres_city: payload
      }; 
    case ActionTypes.CART_ADDRES:
      return {
        ...state,
        addres: payload
      }; 
    case ActionTypes.CART_ADDRES_INDEX:
      return {
        ...state,
        addres_index: payload
      }; 
    case ActionTypes.CART_DELIVERY_METHOD:
      return {
        ...state,
        delivery_method: payload
      }; 
    case ActionTypes.CART_PAY_METHOD:
      return {
        ...state,
        pay_method: payload
      }; 
    default:
      return state;
  }
}