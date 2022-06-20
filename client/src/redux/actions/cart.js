import ActionTypes from '../constants';

export function setInitialDead(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL_DEAD,
    payload: initial
  }
}

export function setBirthdayDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_BERTHDAY,
    payload: date
  }
}

export function setDeadDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_DEAD,
    payload: date
  }
}

export function setFile(date) {
  return {
    type: ActionTypes.CART_BYER_FILE,
    payload: date
  }
}

export function setInstall(install) {
  return {
    type: ActionTypes.CART_INSTALL,
    payload: install
  }
}

export function setConsultInitial(initial) {
  return {
    type: ActionTypes.CART_CONSULT_BYER_INITIAL,
    payload: initial
  }
}

export function setConsultTel(tel) {
  return {
    type: ActionTypes.CART_CONSULT_BYER_TEL,
    payload: tel
  }
}

export function setConsultComent(coment) {
  return {
    type: ActionTypes.CART_CONSULT_COMENT,
    payload: coment
  }
}

export function setInitial(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL,
    payload: initial
  }
}

export function setTel(tel) {
  return {
    type: ActionTypes.CART_BYER_TEL,
    payload: tel
  }
}

export function setEmail(email) {
  return {
    type: ActionTypes.CART_BYER_EMAIL,
    payload: email
  }
}

export function setComent(coment) {
  return {
    type: ActionTypes.CART_COMENT,
    payload: coment
  }
}

export function setInsert(insert) {
  return {
    type: ActionTypes.CART_INSERT,
    payload: insert
  }
}

export function setRegion(region) {
  return {
    type: ActionTypes.CART_ADDRES_REGION,
    payload: region
  }
}

export function setCity(city) {
  return {
    type: ActionTypes.CART_ADDRES_CITY,
    payload: city
  }
}

export function setAddres(addres) {
  return {
    type: ActionTypes.CART_ADDRES,
    payload: addres
  }
}

export function setIndex(index) {
  return {
    type: ActionTypes.CART_ADDRES_INDEX,
    payload: index
  }
}

export function setDeliveryMethod(method) {
  return {
    type: ActionTypes.CART_DELIVERY_METHOD,
    payload: method
  }
}

export function setPayMethod(method) {
  return {
    type: ActionTypes.CART_PAY_METHOD,
    payload: method
  }
}

export function setCategory(method) {
  return {
    type: ActionTypes.CATALOG_CATEGORY,
    payload: method
  }
}
 