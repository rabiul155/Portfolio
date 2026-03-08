import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../Home/Home";
import MySkill from "../MySkill/MySkill";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Experience from "../Experience/Experience";
import ProjectTimeline from "../Projects/Project";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Home />
      <MySkill />
      <Experience />
      <ProjectTimeline />
      <About />
      <Education />
      <Contact />
    </div>
  );
}
