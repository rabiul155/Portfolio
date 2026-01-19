import React from "react";
import Home from "../Home/Home";
import MySkill from "../MySkill/MySkill";
import MyProject from "../MyProject/MyProject";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

export default function Portfolio() {
  return (
    <div>
      <Home></Home>
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
}
