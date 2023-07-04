import mypic from "../assets/mypic.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen -mt-18"
      style={{ backgroundImage: `url(${mypic})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            This blog is compilation of many concepts i am learning that i want
            share with you. feel free to look around and add comments and ideas
          </p>
          <button className="btn btn-primary">See Posts</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
