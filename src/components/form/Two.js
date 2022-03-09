import React from "react";

export default function Two(props) {
  // const [work, setWork] = useState([]);
  // const [covid, setCovid] = useState(false);
  // const [covidDate, setCovidDate] = useState("");
  // const [vaccine, setVaccine] = useState(false);
  // const [vaccineDate, setVaccineDate] = useState("");

  const { handleChange, handleErrors, values, errors } = props;

  return (
    <div className="form">
      <h2>Covid Stuff</h2>
      <div onChange={handleChange} onBlur={handleErrors}>
        <p>how would you prefer to work?</p>
        <input
          type="radio"
          name="work_preference"
          id="office"
          value="from_office"
        />
         <label htmlFor="office">From Sairme Office</label>
        <input
          type="radio"
          name="work_preference"
          id="home"
          value="from_home"
        />
        <label htmlFor="home">From Home</label>
        <input type="radio" name="work_preference" id="hybrid" value="hybrid" />
        <label htmlFor="hybrid">Hybrid</label>
      </div>
      <div onChange={handleChange} onBlur={handleErrors}>
        <p>Did you contact covid 19? :(</p>
          <input type="radio" name="had_covid" id="yes" value="true" />
        <label htmlFor="yes">Yes</label>
          <input type="radio" name="had_covid" id="no" value="false" />
        <label htmlFor="no">No</label>
      </div>
      {errors.had_covid && <p>{errors.had_covid}</p>}
      {values.had_covid && (
        <div>
          <p>When?</p>
          <input
            name="had_covid_at"
            onChange={handleChange}
            onBlur={handleErrors}
            value={values.had_covid_at}
            type="date"
          />
          {errors.had_covid_at && <p>{errors.had_covid_at}</p>}
        </div>
      )}
      <div onChange={handleChange} onBlur={handleErrors}>
        <p>Have you been vaccinated?</p>
          <input type="radio" name="vaccinated" id="yes" value="true" />
        <label htmlFor="yes">Yes</label>
          <input type="radio" name="vaccinated" id="no" value="false" />
        <label htmlFor="no">No</label>
      </div>
      {errors.vaccinated && <p>{errors.vaccinated}</p>}

      {values.vaccinated && (
        <div>
          <p>When did you get your last covid vaccine?</p>
          <input
            name="vaccinated_at"
            onChange={handleChange}
            onBlur={handleErrors}
            value={values.vaccinated_at}
            type="date"
          />
          {errors.vaccinated_at && <p>{errors.vaccinated_at}</p>}
        </div>
      )}
    </div>
  );
}
