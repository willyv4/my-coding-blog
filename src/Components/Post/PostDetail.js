import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../Comment/CommentForm";

const MIN_TEXTAREA_HEIGHT = 32;

const PostDetail = ({ posts }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  const onChange = (event) => setValue(event.target.value);

  const { postid } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === postid);

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

  return (
    <div className="p-10 -mt-24">
      <h1 className="text-5xl font-bold mt-20 p-2">{post?.title}</h1>
      <h3 className="text-xl text-secondary/50  p-2">{post?.description}</h3>
      <textarea
        readOnly
        onChange={onChange}
        ref={textareaRef}
        defaultValue={value}
        className={`mt-4 bg-base-100 w-full h-${MIN_TEXTAREA_HEIGHT} p-2 mb-4 overflow-y-scroll outline-none resize-none`}
      />
      <CommentForm postId={post?.id} />
    </div>
  );
};

export default PostDetail;
