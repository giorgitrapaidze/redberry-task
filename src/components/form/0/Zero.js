import React from "react";
import "./Zero.css";

export default function Zero(props) {
  const { handleChange, handleErrors, values, errors } = props;

  return (
    <div className="form zero">
      <h2>Hey, Rocketeer, what are your coordinates?</h2>
      <div className="form-inputs zero-inputs">
        <input
          name="first_name"
          type="text"
          placeholder="First Name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleErrors}
        />
        {errors.first_name && <p>{errors.first_name}</p>}
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleErrors}
        />
        {errors.last_name && <p>{errors.last_name}</p>}
        <input
          name="email"
          type="text"
          placeholder="E Mail"
          value={values.email}
          onChange={handleChange}
          onBlur={handleErrors}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          name="phone"
          type="text"
          placeholder="+995 5__ ___ ___"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleErrors}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
    </div>
  );
}
