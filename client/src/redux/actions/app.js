import ActionTypes from '../constants';

export function setTabHeader(tab) {
  return {
    type: ActionTypes.HEADER_TAB,
    payload: tab
  }
}

export function setMobileMod(mode) {
  return {
    type: ActionTypes.APP_MOBILE,
    payload: mode
  }
}
