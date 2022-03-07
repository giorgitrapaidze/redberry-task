import React from "react";
import { useState } from "react";

export default function Two() {
  const [work, setWork] = useState([]);
  const [covid, setCovid] = useState(false);
  const [covidDate, setCovidDate] = useState("");
  const [vaccine, setVaccine] = useState(false);
  const [vaccineDate, setVaccineDate] = useState("");

  return (
    <div>
      <h2>Covid Stuff</h2>
      <form action="">
        <p>how would you prefer to work?</p>
          <input type="radio" name="work" id="office" value="from_office" /> 
        <label for="office">From Sairme Office</label>
          <input type="radio" name="work" id="home" value="from_home" /> {" "}
        <label for="home">From Home</label>
          <input type="radio" name="work" id="hybrid" value="hybrid" /> {" "}
        <label for="hybrid">Hybrid</label>
        <p>Did you contact covid 19? :(</p>
          <input type="radio" name="covid" id="yes" value="true" /> {" "}
        <label for="yes">Yes</label>
          <input type="radio" name="covid" id="no" value="false" /> {" "}
        <label for="no">No</label>
        <p>When?</p>
        <input type="date" />
        <p>Have you been vaccinated?</p>
          <input type="radio" name="vaccine" id="yes" value="true" /> {" "}
        <label for="yes">Yes</label>
          <input type="radio" name="vaccine" id="no" value="false" /> {" "}
        <label for="no">No</label>
        <p>When did you get your last covid vaccine?</p>
        <input type="date" />
      </form>
    </div>
  );
}
