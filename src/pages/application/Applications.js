import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import "./application.css";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [mySkills, setMySkills] = useState([]);

  const getApps = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-2022.devtest.ge/api/applications`,
        { params: { token: "d56d1d30-9503-4005-97f3-bd957ce8ec49" } }
      );
      console.log(response.data);
      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSkills = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-2022.devtest.ge/api/skills`
      );
      setMySkills(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkills();
    getApps();
  }, []);
  return (
    <div className="applications">
      <div className="header">
        <h1>Submitted Applications</h1>
      </div>
      <Accordion>
        {applications &&
          applications.map((app, index) => {
            return (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{index}</Accordion.Header>
                <Accordion.Body>
                  <div className="app-left">
                    {" "}
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
                            checked={
                              app.work_preference === "from_office" && true
                            }
                          />
                           <label htmlFor="office">From Sairme Office</label>
                        </div>
                        <div className="work-input">
                          <input
                            type="radio"
                            id="home"
                            value="from_home"
                            readOnly={true}
                            checked={
                              app.work_preference === "from_home" && true
                            }
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
                        <p>Did you contact covid 19? :(</p>
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
                      <div>
                        <p>When?</p>
                        <input
                          className="date-input  app-date"
                          name="had_covid_at"
                          value={app.had_covid_at}
                          placeholder="Date:"
                          type="date"
                          readOnly={true}
                        />
                      </div>
                      <div value={app.vaccinated} className="work">
                        <p className="vaccinated">Have you been vaccinated?</p>
                        <div className="work-input">
                           {" "}
                          <input
                            type="radio"
                            name="vaccinated"
                            id="yes"
                            value="true"
                            readOnly={true}
                          />
                          <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="work-input">
                           {" "}
                          <input
                            type="radio"
                            name="vaccinated"
                            id="no"
                            value="false"
                            readOnly={true}
                          />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>

                      <div>
                        <p>When did you get your last covid vaccine?</p>
                        <input
                          className="date-input  app-date"
                          name="vaccinated_at"
                          value={app.vaccinated_at}
                          placeholder="Date:"
                          type="date"
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="app-right">
                    <div className="skills">
                      <h4>Skillset</h4>
                      {app.skills.map((skill) => {
                        let name = mySkills
                          .filter((mySkill) => {
                            return skill.id === mySkill.id;
                          })
                          .map((skill) => skill.title);

                        return (
                          <div
                            key={skill.id}
                            className="skill"
                            style={{
                              border: "none",
                              marginBottom: "0px",
                              boxSizing: "border-box",
                              height: "42px",
                            }}
                          >
                            <span className="skill-name">{name}</span>
                            <span className="skill-experience">
                              Years of Experience: {skill.experience}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="insights">
                      <h4>Insights</h4>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </div>
  );
}
