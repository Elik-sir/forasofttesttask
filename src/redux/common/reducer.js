import { SET_NAME, ADD_MESSAGE } from './constants';

const defaultState = {
  name: '',
  room: undefined,
  messages: [],
};

const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};
export default commonReducer;
