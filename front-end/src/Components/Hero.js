import mypic from "../assets/mypic.png";
import DownArrow from "../icons/DownArrow";
import PostList from "./Post/PostList";

const Hero = () => {
  return (
    <>
      <div
        className="hero h-screen"
        style={{ backgroundImage: `url(${mypic})` }}
      >
        <div className="hero-overlay bg-base-100 bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="mb-5 font-bold text-lg">
              <code>
                <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                <span className="font-bold">
                  {"< "} This blog is a compilation of concepts I am learning
                  that I want share with you. Feel free to look around, add
                  comments, and share ideas. {"/>"}
                </span>
              </code>
            </div>
          </div>
          <div className="animate-bounce rounded-full mb-6 z-30 absolute bottom-0 mb-3 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 p-[1px]">
            <div className="bg-base-100 p-4 rounded-full">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 bg-gradient-to-b from-transparent via-base-100/90 to-base-100 -mt-48"></div>
      <PostList />
    </>
  );
};

export default Hero;
