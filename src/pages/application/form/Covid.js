import React from "react";

export default function Covid(props) {
  const { app } = props;
  return (
    <div className="covid">
      <h4 style={{ marginBottom: "20px" }}>Covid Situation</h4>

      <div className="work">
        <p>how would you prefer to work?</p>

        <div className="work-input">
          <input
            type="radio"
            id="office"
            value="from_office"
            readOnly={true}
            checked={app.work_preference === "from_office" && true}
          />
           <label htmlFor="office">From Sairme Office</label>
        </div>
        <div className="work-input">
          <input
            type="radio"
            id="home"
            value="from_home"
            readOnly={true}
            checked={app.work_preference === "from_home" && true}
          />
          <label htmlFor="home">From Home</label>
        </div>
        <div className="work-input">
          <input
            type="radio"
            id="hybrid"
            value="hybrid"
            readOnly={true}
            checked={app.work_preference === "hybrid" && true}
          />
          <label htmlFor="hybrid">Hybrid</label>
        </div>
      </div>
      <div
        className="work"
        name="had_covid"
        value={app.had_covid}
        readOnly={true}
      >
        <p>Did you have covid 19?</p>
        <div className="work-input">
           {" "}
          <input
            type="radio"
            id="yes"
            value="true"
            readOnly={true}
            checked={app.had_covid === true}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="work-input">
           {" "}
          <input
            type="radio"
            id="no"
            value="false"
            readOnly={true}
            checked={app.had_covid === false && true}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      {app.had_covid && (
        <div>
          <p>When did you have covid 19?</p>
          <input
            className="date-input  app-date"
            name="had_covid_at"
            value={app.had_covid_at}
            placeholder="Date:"
            type="date"
            readOnly={true}
          />
        </div>
      )}

      <div value={app.vaccinated} className="work">
        <p className="vaccinated">Have you been vaccinated?</p>
        <div className="work-input">
           {" "}
          <input
            type="radio"
            id="yes"
            value="true"
            readOnly={true}
            checked={app.vaccinated === true && true}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="work-input">
           {" "}
          <input
            type="radio"
            id="no"
            value="false"
            readOnly={true}
            checked={app.vaccinated === false && true}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      {app.vacinated && (
        <div>
          <p>When did you get covid vaccine?</p>
          <input
            className="date-input  app-date"
            name="vaccinated_at"
            value={app.vaccinated_at}
            placeholder="Date:"
            type="date"
            readOnly={true}
          />
        </div>
      )}
    </div>
  );
}
