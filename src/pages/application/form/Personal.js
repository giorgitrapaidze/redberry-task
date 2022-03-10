import React from "react";

export default function Personal(props) {
  const { app } = props;
  return (
    <div className="personal">
      <h4>Personal Information</h4>
      <div className="field">
        {" "}
        <label htmlFor="first_name">First Name</label>
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          value={app.first_name}
          readOnly={true}
        />
      </div>
      <div className="field">
        {" "}
        <label htmlFor="first_name">Last Name</label>
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={app.last_name}
          readOnly={true}
        />
      </div>
      <div className="field">
        {" "}
        <label htmlFor="first_name">E mail</label>
        <input
          name="email"
          type="text"
          placeholder="E Mail"
          value={app.email}
          readOnly={true}
        />
      </div>
      <div className="field">
        {" "}
        <label htmlFor="first_name">Phone</label>
        <input
          name="phone"
          type="text"
          placeholder="+995 5__ ___ ___"
          value={app.phone}
          readOnly={true}
        />
      </div>
    </div>
  );
}
