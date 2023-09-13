import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio! I'm Manish Kushwaha, a dedicated frontend React developer. My journey in web development began with a passion for creating beautiful, interactive user interfaces. Today, I specialize in harnessing the power of React to build cutting-edge web applications.I take pride in my ability to blend creativity with technical prowess. Whether it's breathing life into a new project or enhancing an existing one, I bring a unique mix of design sensibility and coding expertise to the table. I believe that a well-crafted user experience is key to a successful website, and I'm committed to delivering just that.
        </p>

        <br />

        <p className="text-xl">
        My toolkit includes React, HTML5, CSS3, and JavaScript, and I'm always eager to explore new technologies and stay up-to-date with the latest trends in frontend development. With a collaborative mindset and a dedication to clean, maintainable code, I enjoy working in agile teams to turn ideas into reality.When I'm not coding, you can find me exploring the latest web design trends, experimenting with new libraries, or simply enjoying a cup of coffee while sketching out new ideas. Let's work together to create exceptional digital experiences that captivate and engage users. Explore my portfolio to see some of my recent projects, and feel free to get in touch to discuss how we can bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default About;
