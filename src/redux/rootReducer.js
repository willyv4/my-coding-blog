import { ADD_POST, ADD_COMMENT } from "./actionTypes";

const storedPosts = localStorage.getItem("posts");
const savedPosts = storedPosts ? JSON.parse(storedPosts) : [];
const INITIAL_STATE = {
  posts: savedPosts,
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      //  ADD AND GET POSTS FROM LOCAL STORAGE
      function addPostLocalStorage() {
        const updatedPosts = [...state.posts, action.payload];
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        return JSON.parse(localStorage.getItem("posts"));
      }

      return {
        ...state,
        posts: addPostLocalStorage(),
      };

    case ADD_COMMENT:
      //GET POST
      const storedPosts = JSON.parse(localStorage.getItem("posts"));
      const postIndex = storedPosts.findIndex(
        (post) => post.id === action.payload.postId
      );

      if (postIndex !== -1) {
        const updatedPosts = [...storedPosts];
        const updatedPost = {
          comments: [...updatedPosts[postIndex].comments, action.payload],
        };
        updatedPosts[postIndex] = updatedPost;

        localStorage.setItem("posts", JSON.stringify(updatedPosts));

        return {
          ...state,
          posts: updatedPosts,
        };
      }

      return {
        ...state,
        posts: addPostLocalStorage(),
      };

    default:
      return state;
  }
}

export default rootReducer;
