import React, { useEffect } from "react";
import img from "../../images/brand1.png";
import resume from "./resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import figmaIcon from "../Icons/figma-svgrepo-com.svg";
import database from "../Icons/database-svgrepo-com.svg";
import node from "../Icons/node-js-svgrepo-com.svg";

import Typewriter from "typewriter-effect";
import "./Home.css";
import PrimaryButton from "../Shared/PrimaryButton";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
          <img src={img} className="relative object-cover" alt="" />
          <div className="absolute top-1/3 right-1 md:right-1/4 animation-y h-8 w-10 md:w-16 md:h-12 flex items-center justify-center rounded-lg bg-white">
            <img src={node} className="" alt="" />
          </div>

          <div className="absolute top-12 left-8 md:left-1/4 animation-y w-8 h-10 md:w-12 md:h-14 flex items-center justify-center rounded-lg bg-orange-800">
            <img src={database} className="" alt="" />
          </div>

          <div className="absolute bottom-0 right-1/2 animation-y w-8 h-10 md:w-12 md:h-14 flex items-center justify-center rounded-lg bg-blue-200">
            <img src={figmaIcon} className="" alt="" />
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div data-aos="fade-left" className="sm:mt-20">
            <h1 className="text-xl font-bold text-center md:text-left">
              Hello! I am <br />
              <span className="text-brand text-4xl">Rabiul Islam</span>
            </h1>
            <div className="py-5 text-xl md:text-2xl font-bold text-secondary flex justify-center md:justify-start ">
              <Typewriter
                options={{
                  strings: ["Software Engineer!!!", "Full Stack Developer!!!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-wrap text-center md:text-left">
              Full stack web developer with proven end-to-end development
              skills. Knowledgeable in user interface, testing, and debugging
              processes. I am Interested in learning the latest web technology.
              Able to work well in teams as well as individually.
            </p>
            <div className="py-6 flex justify-center md:justify-start">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <a href={resume} download>
                  <PrimaryButton text={"My Resume"} />
                </a>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/rabiul-islam47/">
                    <FaLinkedinIn className=" hover:text-brand transition-colors duration-300" />
                  </a>
                  <a href="https://github.com/rabiul155">
                    <FaGithub className=" hover:text-brand transition-colors duration-300" />
                  </a>
                  <a href="https://www.facebook.com/share/1S4kZsMhsi/">
                    <FaFacebookF className=" hover:text-brand transition-colors duration-300" />
                  </a>

                  <a href="#">
                    <FaTwitter className=" hover:text-brand transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
