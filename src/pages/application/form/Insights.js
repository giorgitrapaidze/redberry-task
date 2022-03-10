import React from "react";

export default function Insights(props) {
  const { app } = props;
  return (
    <div className="insights">
      <h4>Insights</h4>
      <div className="form three insights" style={{ maxWidth: "447px" }}>
        <div className="about-you">
          <p>Would you attend Devtalks and maybe also organize your own?</p>
          <div className="about-input first-radio">
            <input
              type="radio"
              id="yes"
              value="app"
              readOnly={true}
              checked={app.will_organize_devtalk === true && true}
            />
            <label htmlFor="yes">Yes</label> {" "}
          </div>
          <div className="about-input">
            <input
              type="radio"
              checked={app.will_organize_devtalk === false && false}
              id="no"
              readOnly={true}
              value="false"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {app.will_organize_devtalk && (
          <div className="devtalk">
            <p>What would you speak about at Devtalk?</p>
            <textarea
              name="devtalk_topic"
              value={app.devtalk_topic}
              id=""
              readOnly={true}
              style={{ width: "447px" }}
            ></textarea>
          </div>
        )}

        <p>Tell us something special</p>
        <textarea
          className="special"
          name="something_special"
          readOnly={true}
          value={app.something_special}
          style={{ height: "100px" }}
        >
          I...
        </textarea>
      </div>
    </div>
  );
}
