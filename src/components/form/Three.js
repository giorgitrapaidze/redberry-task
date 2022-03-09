import React from "react";

export default function Three(props) {
  const { handleChange, handleErrors, values, errors } = props;

  return (
    <div className="form">
      <h2>What about you?</h2>
      <div onChange={handleChange}>
        <p>Would you attend Devtalks and maybe also organize your own?</p> {" "}
        <input
          type="radio"
          name="will_organize_devtalk"
          id="yes"
          value="true"
        />
        <label htmlFor="yes">Yes</label> {" "}
        <input
          type="radio"
          name="will_organize_devtalk"
          id="no"
          value="false"
        />
        <label htmlFor="no">No</label>
      </div>
      {errors.will_organize_devtalk && <p>{errors.will_organize_devtalk}</p>}

      {values.will_organize_devtalk && (
        <div>
          <p>What would you speak about at Devtalk?</p>
          <textarea
            onChange={handleChange}
            name="devtalk_topic"
            value={values.devtalk_topic}
            id=""
            cols="30"
            rows="10"
          >
            I would...
          </textarea>
          {errors.devtalk_topic && <p>{errors.devtalk_topic}</p>}
        </div>
      )}

      <p>Tell us something special</p>
      <textarea
        onChange={handleChange}
        name="something_special"
        value={values.something_special}
        id=""
        cols="30"
        rows="10"
      >
        I...
      </textarea>
      {errors.something_special && <p>{errors.something_special}</p>}
    </div>
  );
}
