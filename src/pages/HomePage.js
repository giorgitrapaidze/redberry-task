import React from "react";
import { useNavigate, Link } from "react-router-dom";
import background from "/images/stars.png";

export default function Homepage() {
  const navigate = useNavigate();

  function goToForm() {
    navigate("/form");
  }
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="home">
      <h1>Welcome Rocketeer!</h1>
      <button className="submit-button" onClick={goToForm}>
        Start Questionnaire
      </button>
      <Link to="/submitted-applications">Submitted Applications</Link>
    </div>
  );
}
