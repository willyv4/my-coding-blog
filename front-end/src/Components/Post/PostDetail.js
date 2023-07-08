import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@clerk/clerk-react";
import { removePost, getPost } from "../../redux/actionTypes";
import CommentForm from "../Comment/CommentForm";
import { willId } from "../../config";

const MIN_TEXTAREA_HEIGHT = 32;

const PostDetail = () => {
  const { userId } = useAuth();
  const isWill = userId === willId;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const { postid } = useParams();
  useEffect(() => {
    dispatch(getPost(postid));
  }, [dispatch, postid]);

  const post = useSelector(({ postDetail }) => postDetail);

  useEffect(() => {
    setValue(post?.body);
    if (post?.error) return navigate("/");
  }, [post, navigate]);

  useLayoutEffect(() => {
    textareaRef.current.style.height = "inherit";
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  const handleDelete = (postId) => {
    dispatch(removePost(postId));
    return navigate("/");
  };

  return (
    <div className="bg-gradient-to-t from-base-100">
      <div className=" w-full p-[12%]">
        <h1 className="text-5xl font-bold  p-2">{post?.title}</h1>
        <h3 className="text-xl text-secondary/50  p-2">{post?.description}</h3>
        <textarea
          ref={textareaRef}
          defaultValue={value}
          className={`mt-4 h-${MIN_TEXTAREA_HEIGHT} w-full bg-transparent p-2 mb-4 outline-none resize-none`}
        />
        <CommentForm postId={post?.id} isWill={isWill} />
      </div>

      {isWill && (
        <button
          onClick={() => handleDelete(post?.id)}
          className="btn btn-secondary fixed right-5 bottom-5"
        >
          Delete Post
        </button>
      )}
    </div>
  );
};

export default PostDetail;
