import React from "react";
import Home from "../Home/Home";
import MySkill from "../MySkill/MySkill";
import MyProject from "../MyProject/MyProject";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Portfolio() {
  return (
    <div>
      <Home></Home>
      {/* <About></About> */}
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
}
