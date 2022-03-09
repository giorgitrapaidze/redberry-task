import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

export default function Applications() {
  const [applications, setApplications] = useState([]);
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

  useEffect(() => {
    getApps();
  }, []);
  return (
    <div>
      <h1>Submitted Applications</h1>
      <button onClick={getApps}>load</button>
      {applications &&
        applications.map((app) => {
          return <h1>{app.first_name}</h1>;
        })}
    </div>
  );
}
