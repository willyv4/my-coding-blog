import mypic from "../assets/mypic.png";
import DownArrow from "../icons/DownArrow";
import PostList from "./Post/PostList";

const Hero = ({ posts }) => {
  return (
    <>
      <div
        className="hero h-screen"
        style={{ backgroundImage: `url(${mypic})` }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5 font-bold text-lg">
              This blog is a compilation of concepts I am learning that I want
              share with you. Feel free to look around, add comments, and share
              ideas.
            </p>

            <div className="animate-bounce btn btn-primary rounded-full -ml-6 mb-2 z-30 absolute bottom-0 justfiy-center">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 bg-gradient-to-b from-transparent via-neutral/90 to-neutral -mt-48"></div>
      <PostList posts={posts} />
    </>
  );
};

export default Hero;
