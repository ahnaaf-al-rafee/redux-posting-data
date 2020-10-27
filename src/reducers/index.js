import postReducers from "./postReducers";

const { combineReducers } = require("redux");

export default combineReducers({
  posts: postReducers,
});
