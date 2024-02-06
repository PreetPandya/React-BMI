import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0);
  const [result, setResult] = useState();

  // Formula : BMI = Weight(kg)/height(m)^2

  let calculateBMI = (e) => {
    e.preventDefault();
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    if (isNaN(weightFloat) || isNaN(heightFloat) || weightFloat <= 0 || heightFloat <= 0) {
      alert("Enter Valid Weight And Height.");
    } else {
      let bmi = weightFloat / (heightFloat * heightFloat);
      setBMI(bmi.toFixed(2));

      if (bmi < 18.5) {
        setResult("You Are Underweight ☠️");
      } else if (18.5 <= bmi && bmi < 24.9) {
        setResult("You Are Healthyweight 😇");
      } else if (25 <= bmi && bmi < 29.9) {
        setResult("You Are Overweight! 🐖");
      } else {
        setResult("You Are Obese!!! 🐘");
      }
    }
  };

  function resetBTN() {
    setBMI(0);
    setWeight("");
    setHeight("");
    setResult();
  }

  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form id="form" onSubmit={calculateBMI}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Weight (kg)
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Your Weight"
              value={weight}
              required
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Height (m)
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Your Height"
              value={height}
              required
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="d-grid gap-2 col-12 mx-auto">
            <button className="btn btn-outline-info">Submit</button>
            <button
              type="reset"
              className="btn btn-outline-warning"
              onClick={resetBTN}
            >
              Reset
            </button>
          </div>
          <div>
            <h4>Your BMI Is: {bmi}</h4>
            <p>{result}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
