import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../Comment/CommentForm";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/actionTypes";
import { useAuth } from "@clerk/clerk-react";
import { willId } from "../../config";
import { getPost } from "../../redux/actionTypes";
import { useSelector } from "react-redux";

const MIN_TEXTAREA_HEIGHT = 32;

const PostDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const { postid } = useParams();
  useEffect(() => {
    dispatch(getPost(postid));
  }, []);

  const post = useSelector((st) => st.posts);

  useEffect(() => {
    !post ? navigate("/") : setValue(post?.body);
  }, [post, navigate]);

  useLayoutEffect(() => {
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  const { userId } = useAuth();
  const isWill = userId === willId ? true : false;
  return (
    <div className="p-10 ">
      <h1 className="text-5xl font-bold mt-10 p-2">{post?.title}</h1>
      <h3 className="text-xl text-secondary/50  p-2">{post?.description}</h3>
      <textarea
        readOnly
        ref={textareaRef}
        defaultValue={value}
        className={`mt-4 bg-base-100 w-full h-${MIN_TEXTAREA_HEIGHT} p-2 mb-4 overflow-y-scroll outline-none resize-none`}
      />
      <CommentForm postId={post?.id} />
      {isWill && (
        <button
          onClick={() => dispatch(removePost(post?.id))}
          className="btn btn-secondary fixed right-5 bottom-5"
        >
          Delete Post
        </button>
      )}
    </div>
  );
};

export default PostDetail;
