const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 1;

  function handlePrevious() {
    alert("previous");
  }

  function handleNext() {
    alert("next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>

      <p className="message">Step 1 - Learn React {step[step - 1]} </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
          className="previous"
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
          className="Previous"
        >
          Next
        </button>
      </div>
      <div></div>
    </div>
  );
}
