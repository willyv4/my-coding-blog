import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getAllComments } from "../../redux/actionTypes";

const CommentForm = ({ postId, isWill }) => {
  const comments = useSelector((st) => st.comments);
  const dispatch = useDispatch();

  console.log("COMMENTS WITH ID ", comments);

  useEffect(() => {
    if (postId) dispatch(getAllComments(postId));
  }, [dispatch, postId]);

  const INITIAL_STATE = { id: uuid(), name: "", comment: "" };
  const [commData, setCommData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setCommData((prevData) => ({
      ...prevData,
      postId: postId,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addComment(commData));
    setCommData(INITIAL_STATE);
  };

  console.log(comments);

  return (
    <div className="mt-14 -mb-20">
      <h1 className="text-4xl font-bold mb-6 ml-2">Comments</h1>
      <CommentList postId={postId} comments={comments} isWill={isWill} />
      <form onSubmit={handleSubmit} className="flex flex-wrap ml-2 mt-6">
        <input type="hidden" name="id" defaultValue={commData.id} />
        <input type="hidden" name="postId" defaultValue={commData.postId} />
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
