import React from "react";
import ReactDOM from "react-dom";

const skills = [
  {
    skill: "HTML5",
    level: "advanced",
    color: "#FFD1DC",
  },
  {
    skill: "CSS3",
    level: "advanced",
    color: "#AFEEEE",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#E6E6FA",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#98FB98",
  },
  {
    skill: "NodeJS ",
    level: "intermediate",
    color: "#FFDAB8",
  },
];
function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        fontSize: "35px",
        borderColor: "15px solid black",
        borderRadius: "50px",
        borderStyle: "solid",
        margin: "160px",
      }}
    >
      <h1> Margaret Cezar Profile Card</h1>
      <Avatar />
      <Intro />
      <Skilllist />
      <Skill />
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="/margaretC.png"
      alt="Avatar"
      style={{
        width: "50%",
        height: "auto",
        marginTop: "-240px",
        marginLeft: "180px",
      }}
    />
  );
}

function Intro() {
  return (
    <div className="Intro" style={{ fontSize: "30px", margin: "60px 40px" }}>
      <h2>Introduction</h2>
      <p>
        💗 Thanks for visiting my profile. I am an experienced founder. I create
        impactful startups. 💗
      </p>
      <br />
      <p>
        I am passionate about creating meaningful and impactful products. I am
        always looking for new and innovative ways to bring ideas to life. I am
        excited to work with you.
      </p>
      <p>
        My passions are a convergence of technology, health tech, cybersecurity,
        and AI.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div
      className="Skilllist"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Skills</h2>
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div
      className="Skill"
      style={{
        backgroundColor: color,
        textAlign: "center",
        display: "flex",
        fontSize: "25px",
        fontWeight: "bold",
        margin: "10px 10px",
        padding: "10px 10px",
        borderRadius: "15px",
      }}
    >
      <span>{skill}</span>
      <span>
        {level === "beginner" && "  👶🏻"}
        {level === "intermediate" && "  👍🏻"}
        {level === "advanced" && "  💪🏻"}
      </span>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
