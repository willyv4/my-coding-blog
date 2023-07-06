import { useEffect, useState } from "react";

const CommentList = ({ comments }) => {
  const [commentArr, setCommentArr] = useState([]);

  useEffect(() => {
    if (comments) setCommentArr(comments);
  }, [comments, setCommentArr]);

  const handleClick = (id) => {
    const updatedComments = comments.filter((c) => c.id !== id);
    setCommentArr(updatedComments);
  };

  return (
    <div className="p-2">
      {commentArr.map((c) => (
        <div key={c.id}>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              <div className="flex flex-row justify-between">
                <div className="font-bold text-lg">Name: {c.name}</div>
                <div
                  onClick={() => handleClick(c.id)}
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
