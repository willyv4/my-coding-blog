import { removeComment } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";

const CommentList = ({ postId, comments, isWill }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-2">
      {comments.map((c) => (
        <div key={c.id}>
          <div className="mb-3 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 w-fit p-[1px] rounded-md">
            <div className="bg-base-200 p-2 rounded-md w-fit">
              <div className="flex flex-row justify-between">
                <div className="font-bold text-lg text-white">
                  Name: {c.name}
                </div>
                {isWill && (
                  <div
                    onClick={() => dispatch(removeComment(postId, c.id))}
                    className="text-accent ml-32 font-bold text-xs h-5 w-5 text-center rounded-full cursor-pointer mb-4"
                  >
                    X
                  </div>
                )}
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
