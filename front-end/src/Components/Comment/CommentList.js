import { removeComment } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";

const CommentList = ({ postId, comments }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-2">
      {comments.map((c) => (
        <div key={c.id}>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              <div className="flex flex-row justify-between">
                <div className="font-bold text-lg">Name: {c.name}</div>
                <div
                  onClick={() => dispatch(removeComment(postId, c.id))}
                  className="bg-neutral text-white ml-20 font-bold text-xs h-5 w-5 text-center rounded-full pointer"
                >
                  x
                </div>
              </div>
              {c.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
