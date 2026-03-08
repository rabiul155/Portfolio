import React from "react";
import Home from "../Home/Home";
import MySkill from "../MySkill/MySkill";
import MyProject from "../MyProject/MyProject";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Experience from "../Experience/Experience";

export default function Portfolio() {
  return (
    <div>
      <Home />
      <MySkill />
      <Experience />
      <About />
      <MyProject />
      <Education />
      <Contact />
    </div>
  );
}
