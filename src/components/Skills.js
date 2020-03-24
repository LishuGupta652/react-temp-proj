import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h1>Who am I</h1>
        <h3>Full Stack Web Developer, Android Developer and Programmer.</h3>
      </div>
      <div className="github">
        <h1>GitHub</h1>
        <a href="https://www.github.com/lishugupta652" target="_">
          <button>Connect</button>
        </a>
      </div>
      <div className="resume">
        <h1>Resume</h1>
        <a
          href="https://drive.google.com/open?id=1UiG9E1EZsSIehbzVPrvFfXyfyQhO7GC_E66tvmv1vjc"
          target="_"
        >
          <button>View</button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
