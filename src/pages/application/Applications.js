import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import "./application.css";
<<<<<<< HEAD
import Covid from "./form/Covid";
import Insights from "./form/Insights";
import Personal from "./form/Personal";
import Skills from "./form/Skills";
=======
>>>>>>> 9d8b4cfb79ff55f1b4a95b628f707f03195e4bb5

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [mySkills, setMySkills] = useState([]);

  const getApps = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-2022.devtest.ge/api/applications`,
<<<<<<< HEAD
        { params: { token: process.env.REACT_APP_TOKEN } }
      );
=======
        { params: { token: "d56d1d30-9503-4005-97f3-bd957ce8ec49" } }
      );
      console.log(response.data);
>>>>>>> 9d8b4cfb79ff55f1b4a95b628f707f03195e4bb5
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
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{index}</Accordion.Header>
                <Accordion.Body>
                  <div className="app-left">
                    <Personal app={app} />
                    <Covid app={app} />
                  </div>
                  <div className="app-right">
                    <Skills mySkills={mySkills} app={app} />
                    <Insights app={app} />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </div>
  );
}
