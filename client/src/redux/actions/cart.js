import ActionTypes from '../constants';

export function setInitialDead(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL_DEAD,
    byer_initial_dead: initial
  }
}

export function setBirthdayDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_BERTHDAY,
    byer_date_birthday: date
  }
}

export function setDeadDate(date) {
  return {
    type: ActionTypes.CART_BYER_DATE_DEAD,
    byer_date_dead: date
  }
}

export function setFile(date) {
  return {
    type: ActionTypes.CART_BYER_FILE,
    byer_file: date
  }
}

export function setInstall(install) {
  return {
    type: ActionTypes.CART_INSTALL,
    install: install
  }
}

export function setInitial(initial) {
  return {
    type: ActionTypes.CART_BYER_INITIAL,
    byer_initial: initial
  }
}

export function setTel(tel) {
  return {
    type: ActionTypes.CART_BYER_TEL,
    byer_tel: tel
  }
}

export function setEmail(email) {
  return {
    type: ActionTypes.CART_BYER_TEL,
    byer_tel: email
  }
}

export function setComent(coment) {
  return {
    type: ActionTypes.CART_COMENT,
    coment: coment
  }
}

export function setRegion(region) {
  return {
    type: ActionTypes.CART_ADDRES_REGION,
    addres_region: region
  }
}

export function setCity(city) {
  return {
    type: ActionTypes.CART_ADDRES_CITY,
    addres_city: city
  }
}

export function setAddres(addres) {
  return {
    type: ActionTypes.CART_ADDRES,
    addres: addres
  }
}

export function setIndex(index) {
  return {
    type: ActionTypes.CART_ADDRES_INDEX,
    addres_index: index
  }
}

export function setDeliveryMethod(method) {
  return {
    type: ActionTypes.CART_DELIVERY_METHOD,
    delivery_method: method
  }
}

export function setPayMethod(method) {
  return {
    type: ActionTypes.CART_PAY_METHOD,
    pay_method: method
  }
}
 