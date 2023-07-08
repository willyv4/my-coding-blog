import meImg from "../assets/me.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="p-[10%] pt-32 -mb-24">
        <div className="flex">
          <img
            src={meImg}
            alt="me"
            className="w-14 h-14 rounded-full mr-4 mb-4"
          />
          <h1 className="mt-2 text-3xl font-bold mb-3 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent">
            About Me:
          </h1>
        </div>

        <p>
          Hey there! 👋 I'm <strong>Will Valadez</strong>, a passionate Software
          Engineer with a knack for problem-solving and process improvement. 💡
          With a diverse range of skills spanning full-stack engineering,
          databases, data structures/algorithms, business leadership, and
          cross-functional collaboration, I bring a unique blend of expertise to
          the table.
        </p>

        <br></br>

        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent">
          Professional Journey:
        </h2>

        <p>
          Throughout my career, I've had the awesome opportunity to lead
          multiple teams, train employees, and implement lean manufacturing
          practices that resulted in whopping daily savings of up to $30,000! 💰
          Talk about efficiency, right?
        </p>

        <br></br>

        <p>
          When it comes to coding, I'm a wizard with JavaScript, React, Tailwind
          CSS, Express, Python, Flask, and more! 🚀 I've built some pretty cool
          apps that solve real-world problems and bring smiles to users' faces.
          😄 Always up for a challenge, I thrive on delivering high-quality work
          and seeking new ways to level up my skills.
        </p>

        <br></br>

        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent">
          Embracing an Active Lifestyle:
        </h2>

        <p>
          But hey, work isn't everything, right? When I'm not coding, you can
          find me staying active and enjoying life to the fullest! 💪 Whether
          it's hitting the gym, kicking a soccer ball around, rock climbing, or
          shredding it on a skateboard, I love embracing the thrill of staying
          active and pushing my limits.
        </p>

        <br></br>

        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent">
          Love for the Outdoors:
        </h2>

        <p>
          And let's not forget my love for the great outdoors! 🏞️ I'm all about
          those epic adventures like hiking Half Dome or exploring the
          breathtaking beauty of Havasupai Falls. 🥾 There's something
          incredibly invigorating about being out in nature and discovering
          hidden gems along the way. Backpacking trips? Count me in!
        </p>

        <br></br>

        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent">
          Seeking Exciting Opportunities:
        </h2>

        <p>
          I'm fueled by my passion for delivering top-notch work and creating a
          positive impact. I'm on the lookout for an exciting opportunity to
          bring my skills and enthusiasm to a fantastic company as a Software
          Engineer.
        </p>

        <br></br>
        <p>
          Thanks for getting to know a bit about me! Let's connect and explore
          how we can collaborate and make awesome things happen together. 🚀
        </p>
      </div>
    </>
  );
};

export default AboutMe;
