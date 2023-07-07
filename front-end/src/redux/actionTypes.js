import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_POST = "GET_POST";

const API_URL = "http://localhost:5000";

export const addComment = (commentData) => {
  return {
    type: ADD_COMMENT,
    payload: { ...commentData },
  };
};

export const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  };
};

export const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    payload: postId,
  };
};

function handleError(error) {
  return {
    type: "ERROR",
    error,
  };
}

export function addPost(postData) {
  return async function thunk(dispatch) {
    try {
      const endPoint = "api/posts";
      const { data } = await axios.post(`${API_URL}/${endPoint}`, postData);
      dispatch({
        type: UPDATE_POST,
        payload: data,
      });
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function getAllPosts() {
  return async function thunk(dispatch) {
    try {
      const endPoint = "api/posts";
      const { data } = await axios.get(`${API_URL}/${endPoint}`);
      dispatch({
        type: GET_ALL_POSTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch(handleError(error.response.data));
    }
  };
}

export function getPost(postId) {
  return async function thunk(dispatch) {
    try {
      const endPoint = `api/posts/${postId}`;
      const { data } = await axios.get(`${API_URL}/${endPoint}`);
      dispatch({
        type: GET_POST,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch(handleError(error.response.data));
    }
  };
}
