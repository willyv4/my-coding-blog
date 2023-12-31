import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_POST = "GET_POST";
export const ALL_COMMENTS = "ALL_COMMENTS";
export const VOTE_POST = "VOTE_POST";
export const UPDATE_VOTE = "UPDATE_VOTE";

const API_URL =
  process.env.BACKEND_BLOGURL || "https://willsdevblog-backend.onrender.com";

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
      dispatch(handleError(error.response.data));
    }
  };
}

export function removePost(postId) {
  return async function thunk(dispatch) {
    try {
      const endPoint = `api/posts/${postId}`;
      await axios.delete(`${API_URL}/${endPoint}`);
      dispatch({
        type: REMOVE_POST,
        payload: postId,
      });
    } catch (error) {
      dispatch(dispatch(handleError(error.response.data)));
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
      dispatch({
        type: "DETAIL_ERROR",
        error,
      });
    }
  };
}

/*
HANDLE COMMENTS HANDLE COMMENTS HANDLE COMMENTS
*/

export function addComment({ postId, id, name, comment }) {
  return async function thunk(dispatch) {
    try {
      const endPoint = `api/posts/${postId}/comments`;
      const { data } = await axios.post(`${API_URL}/${endPoint}`, {
        id: id,
        comment: comment,
        post_id: postId,
        username: name,
      });
      dispatch({
        type: ADD_COMMENT,
        payload: data,
      });
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function getAllComments(postId) {
  return async function thunk(dispatch) {
    try {
      const endPoint = `api/posts/${postId}/comments`;
      const { data } = await axios.get(`${API_URL}/${endPoint}`);
      dispatch({
        type: ALL_COMMENTS,
        payload: data,
      });
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function removeComment(postId, commId) {
  return async function thunk(dispatch) {
    try {
      const endPoint = `api/posts/${postId}/comments/${commId}`;
      await axios.delete(`${API_URL}/${endPoint}`);
      dispatch({
        type: REMOVE_COMMENT,
        payload: commId,
      });
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function votePost(postId, direction) {
  return async function thunk(dispatch) {
    try {
      const endpoint = `api/posts/${postId}/vote/${direction}`;
      const { data } = await axios.post(`${API_URL}/${endpoint}`);
      dispatch({
        type: UPDATE_VOTE,
        payload: { ...data, isLiked: direction },
      });
    } catch (error) {
      dispatch({
        type: "VOTE_ERROR",
        error,
      });
    }
  };
}
