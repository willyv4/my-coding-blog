import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((st) => st.posts);

  return (
    <div className="flex flex-wrap w-full justify-center p-10 bg-neutral">
      {posts.map((p) => (
        <Link
          to={`/${p.id}`}
          key={p.id}
          className="m-4 mt-20 shadow-xl rounded-sm p-[1px] w-96 hover:scale-105 transform transition-all duration-500 ease-in-out bg-gradient-to-r from-primary via-secondary to-accent opacity-60"
        >
          <div className="bg-base-100 rounded-sm p-8">
            <div className="text-white font-bold text-3xl">{p.title}</div>
            <div className="text-white/80 mt-2">{p.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
