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
    <div className="home-section lg:h-screen" id="home">
      <div className=" py-24 px-4 sm:px-8 ">
        <div className=" grid gird-cols-1 md:grid-cols-2 justify-center">
          <div data-aos="fade-right" className="relative flex justify-center">
            <img
              src={img}
              className="md:absolute object-cover -left-8 lg:left-0 sm:top-16 lg:-top-4 rounded-full "
              alt=""
            />
          </div>

          <div className="overflow-hidden">
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
                processes. I am Interested in learning the latest web
                technology. Able to work well in teams as well as individually.
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
    </div>
  );
};

export default Home;
