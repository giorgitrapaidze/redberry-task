import React from "react";

export default function Info(props) {
  const { data } = props;
  return (
    <div className="info">
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </div>
  );
}
