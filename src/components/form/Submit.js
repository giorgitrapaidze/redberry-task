import React from "react";

export default function Submit(props) {
  const { goBack, submit } = props;
  return (
    <div className="submit-page">
      <button className="submit-button" onClick={submit}>
        Submit
      </button>
      <h3 onClick={goBack}>go back</h3>
    </div>
  );
}
