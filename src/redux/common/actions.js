import { SET_NAME, ADD_MESSAGE } from './constants';

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const addMessage = (msg) => ({
  type: ADD_MESSAGE,
  payload: msg,
});
