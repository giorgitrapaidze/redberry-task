import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  function goToForm() {
    navigate("/form");
  }
  function goToApps() {
    navigate("/submitted-applications");
  }
  return (
    <div
      style={{
        background: "black",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="home main flex justify-center align-center"
    >
      <img className="background" alt="background" src="images/stars.png" />
      <div className="home-main">
        {" "}
        <h1>Welcome Rocketeer!</h1>
        <button
          style={{ fontSize: "24px" }}
          className="submit-button"
          onClick={goToForm}
        >
          Start Questionnaire
        </button>
        <h3 className="submit-text" onClick={goToApps}>
          Submitted Applications
        </h3>
      </div>

      <img className="rocketman" alt="background" src="images/rocketman.png" />
    </div>
  );
}
