import React from "react";
import "./Two.css";

export default function Two(props) {
  const { handleChange, handleErrors, values, errors } = props;

  return (
    <div className="form two">
      <h2>Covid Stuff</h2>
      <div className="two-form">
        <div className="work" onChange={handleChange} onBlur={handleErrors}>
          <p>how would you prefer to work?</p>

          <div className="work-input">
            <input
              type="radio"
              name="work_preference"
              id="office"
              value="from_office"
            />
             <label htmlFor="office">From Sairme Office</label>
          </div>
          <div className="work-input">
            <input
              type="radio"
              name="work_preference"
              id="home"
              value="from_home"
            />
            <label htmlFor="home">From Home</label>
          </div>
          <div className="work-input">
            <input
              type="radio"
              name="work_preference"
              id="hybrid"
              value="hybrid"
            />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>
        {errors.work_preference && (
          <p className="error-message">{errors.work_preference}</p>
        )}

        <div
          className="work"
          name="had_covid"
          value={values.had_covid}
          onChange={handleChange}
          onInput={handleErrors}
        >
          <p>Did you contact covid 19? :(</p>
          <div className="work-input">
             {" "}
            <input
              type="radio"
              name="had_covid"
              onChange={handleChange}
              id="yes"
              value="true"
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="work-input">
             {" "}
            <input
              type="radio"
              name="had_covid"
              onChange={handleChange}
              id="no"
              value="false"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {errors.had_covid && (
          <p className="error-message">{errors.had_covid}</p>
        )}
        {values.had_covid && (
          <div>
            <p>When?</p>
            <input
              className="date-input"
              name="had_covid_at"
              onChange={handleChange}
              onBlur={handleErrors}
              value={values.had_covid_at}
              placeholder="Date:"
              type="date"
              required
            />
            {errors.had_covid_at && (
              <p className="error-message">{errors.had_covid_at}</p>
            )}
          </div>
        )}
        <div
          onChange={handleChange}
          value={values.vaccinated}
          onInput={handleErrors}
          className="work"
        >
          <p className="vaccinated">Have you been vaccinated?</p>
          <div className="work-input">
             {" "}
            <input
              type="radio"
              onChange={handleChange}
              name="vaccinated"
              id="yes"
              value="true"
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="work-input">
             {" "}
            <input
              type="radio"
              onChange={handleChange}
              name="vaccinated"
              id="no"
              value="false"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        {errors.vaccinated && (
          <p className="error-message">{errors.vaccinated}</p>
        )}

        {values.vaccinated && (
          <div>
            <p>When did you get your last covid vaccine?</p>
            <input
              className="date-input"
              name="vaccinated_at"
              onChange={handleChange}
              onBlur={handleErrors}
              value={values.vaccinated_at}
              placeholder="Date:"
              type="date"
              required
            />
            {errors.vaccinated_at && (
              <p className="error-message">{errors.vaccinated_at}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
