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
      className="Skilllist"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h2>Skills</h2>
      <Skill skill="HTML5" emoji="🖥️" color="#FFD1DC" />
      <Skill skill="CSS3" emoji="🎨" color="#AFEEEE" />
      <Skill skill="JavaScript" emoji="🐢" color="#E6E6FA" />
      <Skill skill="React" emoji="⚛️" color="#98FB98" />
      <Skill skill="NodeJS" emoji="📚" color="#FFDAB8" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div
      className="Skill"
      style={{
        backgroundColor: color,
        fontSize: "30px",
        fontWeight: "bold",
        marginTop: "20px",
        gap: "10px",
        margin: "20px 20px",
        padding: "10px 10px",
        borderRadius: "50px",
      }}
    >
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
