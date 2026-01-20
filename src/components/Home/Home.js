import React, { useEffect } from "react";
import img from "../../images/brand1.png";
import resume from "./resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import "./Home.css";
import PrimaryButton from "../Shared/PrimaryButton";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="home-section md:h-screen flex items-center justify-center gap-8"
      id="home"
    >
      <div className=" py-24 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <div data-aos="fade-right" className="flex-1 flex justify-center">
          <img src={img} className="object-cover" alt="" />
        </div>

        <div className="flex-1 overflow-hidden">
          <div data-aos="fade-left" className="sm:mt-20">
            <h1 className="text-xl font-bold text-center sm:text-left">
              Hello! I am <br />
              <span className="text-yellow-500 text-4xl">Rabiul Islam</span>
            </h1>
            <div className="py-6 text-xl sm:text-3xl font-bold text-secondary flex justify-center sm:justify-start ">
              <Typewriter
                options={{
                  strings: [
                    "Junior Web Developer!!!",
                    "MERN Stack Developer!!!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-wrap text-center sm:text-left">
              Full stack web developer with proven end-to-end development
              skills. Knowledgeable in user interface, testing, and debugging
              processes. I am Interested in learning the latest web technology.
              Able to work well in teams as well as individually.
            </p>
            <div className="py-6">
              <a href={resume} download>
                <PrimaryButton text={"My Resume"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
