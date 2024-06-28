import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        fontSize: "35px",
        borderColor: "15px solid black",
        borderStyle: "solid",
        margin: "100px",
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
    <div
      className="Intro"
      style={{ textAlign: "center", fontSize: "24px", marginTop: "50px" }}
    >
      <h2>Introduction</h2>
      <p>
        I create impactful startups. 💗 Thanks for visiting my profile. I am an
        experienced founder.
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
      className="Skill-list"
      style={{
        textAlign: "center",
        fontSize: "20px",
        marginTop: "50px",
        gap: "10px",
        border: "1px solid black",
        margin: "10px 30px",
        padding: "10px",
      }}
    >
      <h2>Skills</h2>
      <Skill skill="HTML" emoji="🖥️" color="yellow" />
      <Skill skill="CSS" emoji="🎨" color="green" />
      <Skill skill="JavaScript" emoji="🐢" color="blue" />
      <Skill skill="React" emoji="⚛️" color="purple" />
      <Skill skill="NodeJS" emoji="📚" color="orangered" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="Skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <p>{emoji}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
