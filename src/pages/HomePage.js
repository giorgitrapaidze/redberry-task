import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  function goToForm() {
    navigate("/form");
  }
  return (
    <div>
      <h1>Welcome Rocketeer!</h1>
      <button onClick={goToForm}>Start Questionnaire</button>
      <Link to="/submitted-applications">Submitted Applications</Link>
    </div>
  );
}
