import React from "react";
import { useState } from "react";

export default function Two() {
  const [work, setWork] = useState([]);
  const [covid, setCovid] = useState(false);
  const [covidDate, setCovidDate] = useState("");
  const [vaccine, setVaccine] = useState(false);
  const [vaccineDate, setVaccineDate] = useState("");

  return (
    <div className="form">
      <h2>Covid Stuff</h2>
      <form action="">
        <p>how would you prefer to work?</p> {" "}
        <input
          type="radio"
          name="work_preference"
          id="office"
          value="from_office"
        />
         <label htmlFor="office">From Sairme Office</label> {" "}
        <input
          type="radio"
          name="work_preference"
          id="home"
          value="from_home"
        />
        <label htmlFor="home">From Home</label> {" "}
        <input type="radio" name="work_preference" id="hybrid" value="hybrid" />
        <label htmlFor="hybrid">Hybrid</label>
        <p>Did you contact covid 19? :(</p>
          <input type="radio" name="had_covid" id="yes" value="true" />
        <label htmlFor="yes">Yes</label>
          <input type="radio" name="had_covid" id="no" value="false" />
        <label htmlFor="no">No</label>
        <p>When?</p>
        <input name="had_covid_at" type="date" />
        <p>Have you been vaccinated?</p>
          <input type="radio" name="vaccinated" id="yes" value="true" />
        <label htmlFor="yes">Yes</label>
          <input type="radio" name="vaccinated" id="no" value="false" />
        <label htmlFor="no">No</label>
        <p>When did you get your last covid vaccine?</p>
        <input name="vaccinated_at" type="date" />
      </form>
    </div>
  );
}
