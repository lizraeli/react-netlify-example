import React from "react";

const skills = ["HTML guru", "CSS master"];

const Skills = () => (
  <div>
    <h2> My Skills </h2>
    <ul> {skills.map(skill => <li> {skill} </li>)} </ul>
  </div>
);

export default Skills;
