import {
  GET_ALL_POSTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  REMOVE_POST,
  UPDATE_POST,
  GET_POST,
} from "./actionTypes";
import { combineReducers } from "redux";

function postReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...state, ...action.payload];

    case UPDATE_POST:
      return [...state, action.payload];

    case GET_POST:
      return action.payload || [];

    case "ERROR":
      return { ...state, error: true };

    case REMOVE_POST:
      const filteredPosts = state.filter((post) => post.id !== action.payload);
      localStorage.setItem("posts", JSON.stringify(filteredPosts));
      return filteredPosts;

    default:
      return state;
  }
}

const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

function commentReducer(state = storedComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action.payload);
      const updatedComments = [...state, action.payload];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      return JSON.parse(localStorage.getItem("comments"));

    case REMOVE_COMMENT:
      const filteredComments = state.filter((c) => c.id !== action.payload);
      localStorage.setItem("comments", JSON.stringify(filteredComments));
      return JSON.parse(localStorage.getItem("comments"));

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

export default rootReducer;
