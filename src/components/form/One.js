import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function One() {
  const [skills, setSkills] = useState([]);
  const [chosenSkill, setChosenSkill] = useState({});
  const [experience, setExperience] = useState("");
  const [allSkills, setAllSkills] = useState([]);
  const [mySkills, setmySkills] = useState([]);
  const getSkills = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-2022.devtest.ge/api/skills`
      );
      setSkills(response.data);
      setAllSkills(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOption = (event) => {
    const optionSkill = skills.filter((skill) => {
      return skill.id === +event.target.value;
    });
    setChosenSkill(optionSkill);
  };

  const handleInput = (event) => {
    setExperience(+event.target.value);
  };

  const addSkill = () => {
    if (chosenSkill.length > 0) {
      let alreadyChosen = [...mySkills];
      alreadyChosen.push({ id: chosenSkill[0].id, experience: experience });
      setAllSkills(
        allSkills.filter((skill) => {
          return skill.id !== chosenSkill[0].id;
        })
      );
      setmySkills(alreadyChosen);
      setChosenSkill({});
      setExperience("");
    }
  };

  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div>
      {" "}
      <h2>Tell us about your skills</h2>
      <div className="form-inputs">
        <select name="skills" id="skills" onChange={handleOption}>
          <option value="">Skills</option>
          {allSkills.map((skill) => {
            return (
              <option key={skill.id} value={skill.id}>
                {skill.title}
              </option>
            );
          })}
        </select>
        <input
          onChange={handleInput}
          type="number"
          value={experience}
          placeholder="Experience Duration in Years"
        />

        <button onClick={addSkill}>Add Programming Language</button>

        {mySkills &&
          mySkills.map((myskill) => {
            let name = skills
              .filter((skill) => {
                return myskill.id === skill.id;
              })
              .map((skill) => skill.title);
            return (
              <input
                value={name + "     Years of experience:" + myskill.experience}
                key={myskill.id}
                readOnly={true}
              />
            );
          })}
      </div>
    </div>
  );
}
