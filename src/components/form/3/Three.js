import React from "react";
import "./Three.css";

export default function Three(props) {
  const { handleChange, handleErrors, values, errors } = props;

  return (
    <div className="form three">
      <h2 id="three-header">What about you?</h2>
      <div className="about-you" onChange={handleChange} onBlur={handleErrors}>
        <p>Would you attend Devtalks and maybe also organize your own?</p> {" "}
        <div className="about-input">
          <input
            type="radio"
            name="will_organize_devtalk"
            onClick={handleChange}
            id="yes"
            value="true"
          />
          <label htmlFor="yes">Yes</label> {" "}
        </div>
        <div className="about-input">
          <input
            type="radio"
            onClick={handleChange}
            name="will_organize_devtalk"
            id="no"
            value="false"
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      {errors.will_organize_devtalk && <p>{errors.will_organize_devtalk}</p>}

      {values.will_organize_devtalk && (
        <div className="devtalk">
          <p>What would you speak about at Devtalk?</p>
          <textarea
            onChange={handleChange}
            onBlur={handleErrors}
            name="devtalk_topic"
            value={values.devtalk_topic}
            id=""
          >
            I would...
          </textarea>
          {errors.devtalk_topic && <p>{errors.devtalk_topic}</p>}
        </div>
      )}

      <p>Tell us something special</p>
      <textarea
        className="special"
        onChange={handleChange}
        onBlur={handleErrors}
        name="something_special"
        value={values.something_special}
        id=""
      >
        I...
      </textarea>
      {errors.something_special && <p>{errors.something_special}</p>}
    </div>
  );
}
