import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@clerk/clerk-react";
import { removePost, getPost } from "../../redux/actionTypes";
import CommentForm from "../Comment/CommentForm";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../ScrollTop";

const PostDetail = () => {
  const { userId } = useAuth();
  const isWill = userId === process.env.REACT_APP_WILLID || process.env.WILLID;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const { postid } = useParams();
  useEffect(() => {
    dispatch(getPost(postid));
  }, [dispatch, postid]);

  const post = useSelector(({ postDetail }) => postDetail);

  useEffect(() => {
    setValue(post?.body);
    if (post?.error) return navigate("/");
  }, [post, navigate]);

  const handleDelete = (postId) => {
    dispatch(removePost(postId));
    return navigate("/");
  };

  console.log(value);

  return (
    <div className="bg-gradient-to-t from-base-100 pt-4">
      <div className=" w-full p-[12%] mt-10">
        <h1 className="text-5xl font-bold  p-2">{post?.title}</h1>
        <h3 className="text-xl text-secondary/50  p-2">{post?.description}</h3>
        <div>
          <div className="mt-4 bg-base-100 p-2 prose">
            <ReactMarkdown>{value}</ReactMarkdown>
          </div>
        </div>
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
      <ScrollToTop />
    </div>
  );
};

export default PostDetail;
