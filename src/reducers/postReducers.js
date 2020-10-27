import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initial_state = {
  items: [],
  item: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
