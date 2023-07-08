import { combineReducers } from "redux";
import {
  GET_ALL_POSTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  REMOVE_POST,
  UPDATE_POST,
  GET_POST,
  ALL_COMMENTS,
  UPDATE_VOTE,
} from "./actionTypes";

function postsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...action.payload];

    case UPDATE_POST:
      return [...state, action.payload];

    case REMOVE_POST:
      return state.filter((posts) => posts.id !== action.payload);

    case "ERROR":
      return { ...state, error: true };

    default:
      return state;
  }
}

function postDetailReducer(state = null, action) {
  switch (action.type) {
    case GET_POST:
      state = action.payload;
      return state;

    case "DETAIL_ERROR":
      return { ...state, error: true };

    default:
      return state;
  }
}

function commentReducer(state = [], action) {
  switch (action.type) {
    case ALL_COMMENTS:
      return [...action.payload];

    case ADD_COMMENT:
      return [...state, action.payload];

    case REMOVE_COMMENT:
      return state.filter((c) => c.id !== action.payload);

    default:
      return state;
  }
}

function voteReducer(state = null, action) {
  switch (action.type) {
    case UPDATE_VOTE:
      console.log(action.payload, "VOTE REDUCER");
      return (state = action.payload);

    case "VOTE_ERROR":
      return { ...state, error: true };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetail: postDetailReducer,
  comments: commentReducer,
  vote: voteReducer,
});

export default rootReducer;
