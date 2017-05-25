import { GET_IMPORTS, UPDATE_EVENTS } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case GET_IMPORTS:
      return action.payload;

    case UPDATE_EVENTS:
      return state;

    default:
      return state;
  }
}
