import React from "react";
import aboutImage from "../../images/about.png";
import SecondaryButton from "../Shared/SecondaryButton";

const About = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center py-8 text-brand">
        About Me
      </h2>
      <div
        className="flex flex-col md:flex-row gap-16  items-center justify-center "
        id="about"
      >
        <div
          data-aos="fade-right"
          className="relative flex-1 flex justify-center lg:justify-end"
        >
          <img
            src={aboutImage}
            className="w-3/4 relative object-cover"
            alt="about"
          />
          <div className="absolute top-12 left-16 flex items-end justify-end gap-2 px-4 py-2 md:px-8 md:py-4 bg-white rounded-xl ">
            <h2 className="text-green-500 text-4xl lg:text-6xl font-semibold">
              5
            </h2>
            <div className="flex flex-col gap-0 text-sm lg:text-lg text-black font-bold py-1">
              <p className="leading-none">Years of</p>
              <p className="leading-none">Success</p>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-2 md:right-0 flex items-end justify-end gap-2 px-4 py-2 md:px-8 md:py-4 bg-white rounded-xl ">
            <h2 className="text-purple-700 text-4xl lg:text-6xl font-semibold">
              26
            </h2>
            <div className="flex flex-col gap-0 text-sm lg:text-lg text-black font-bold py-1">
              <p className="leading-none">Standard</p>
              <p className="leading-none">Projects</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-hidden">
          <div data-aos="fade-left">
            <h4 className="text-xl font-bold text-center text-brand md:text-left">
              I am a Engineer
            </h4>
            <h1 className="text-2xl py-4 font-bold text-center md:text-left">
              I Build Reliable Software Solutions
            </h1>

            <p className="text-wrap text-center md:text-left py-6">
              Hello there! I’m a software engineer who is passionate about
              building efficient, scalable, and user-focused applications. With
              years of experience in software development, I’ve gained the
              technical skills and problem-solving mindset needed to turn ideas
              into high-quality products. I enjoy every step of the development
              process—from understanding requirements and designing systems to
              writing clean code and optimizing performance.
            </p>
            <div className="py-6 flex justify-center md:justify-start">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <SecondaryButton text={"Hire Me"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
