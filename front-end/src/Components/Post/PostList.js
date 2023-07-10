import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../redux/actionTypes";
import Arrow from "../../icons/Arrow";

const PostList = () => {
  const posts = useSelector((st) => st.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap w-full justify-center p-10 bg-base-100/90 pb-48">
      {posts.map((p) => (
        <Link
          key={p.id}
          to={`/${p.id}`}
          className="m-4 mt-20 shadow-xl rounded-sm p-[1px] w-96 hover:scale-105 transform transition-all duration-500 ease-in-out bg-gradient-to-r from-primary via-secondary to-accent opacity-60"
        >
          <div className="bg-base-100 rounded-sm p-8 h-36">
            <div className="text-white font-bold text-3xl -mt-2">{p.title}</div>
            <small className="text-white/80 mt-2">{p.description}</small>
            <div className="absolute font-bold right-3 bottom-3 flex">
              <div className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                See Post
              </div>
              <Arrow />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
