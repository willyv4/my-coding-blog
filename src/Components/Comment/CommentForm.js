import { useState } from "react";
import CommentList from "./CommentList";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../../redux/actionTypes";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const INITIAL_STATE = { postId: postId, id: uuid(), name: "", comment: "" };
  const [commData, setCommData] = useState(INITIAL_STATE);
  const [comments, setComments] = useState([]);

  const addComments = (commentData) => {
    setComments((prevComments) => [...prevComments, commentData]);
  };

  const addComment = () =>
    dispatch({
      type: ADD_COMMENT,
      payload: { ...commData },
    });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCommData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCommData(commData);
    addComments(commData);
    // addComments(commData, id);
    addComment();
    setCommData(INITIAL_STATE);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 ml-2">Comments</h1>
      <CommentList comments={comments} />
      <form onSubmit={handleSubmit} className="flex flex-wrap ml-2 mt-6">
        <input type="hidden" defaultValue={commData.id} />
        <input type="hidden" defaultValue={commData.postId} />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={commData.name}
          placeholder="Name"
          className="input input-bordered input-primary  min-w-96 mb-2 mr-2"
        />
        <input
          type="text"
          name="comment"
          onChange={handleChange}
          value={commData.comment}
          placeholder="Comment"
          className="input input-bordered input-primary  min-w-96 mr-2 mb-2"
        />
        <button type="submit" className="btn btn-secondary">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
