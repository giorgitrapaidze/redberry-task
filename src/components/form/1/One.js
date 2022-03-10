import React from "react";
import axios from "axios";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useState, useEffect } from "react";
import "./One.css";

export default function One(props) {
  const { errors, values, handleSkills, handleChange } = props;
  const [skills, setSkills] = useState([]);
  const [chosenSkill, setChosenSkill] = useState({});
  const [experience, setExperience] = useState("");
  const [allSkills, setAllSkills] = useLocalStorage("allSkills", []);
  const [mySkills, setmySkills] = useLocalStorage("mySkills", {});
  const [skillError, setSkillError] = useState([]);
  const getSkills = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-2022.devtest.ge/api/skills`
      );
      setSkills(response.data);
      if (mySkills.length === 0) {
        setAllSkills(response.data);
      }
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
    console.log(chosenSkill);
    if (
      Object.keys(chosenSkill).length === 0 &&
      !skillError.includes("Please choose a skill")
    ) {
      if (experience === "") {
        if (!skillError.includes("Please enter experience years")) {
          setSkillError([...skillError, "Please enter experience years"]);
        }
      }
      setSkillError([...skillError, "Please choose a skill"]);
    }

    if (chosenSkill.length > 0 && experience !== "") {
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
      setSkillError("");
      delete errors.skills;
    }
  };

  const removeSkill = (id) => {
    let alreadyChosen = [...mySkills];
    let toAddBack = skills.find((skill) => skill.id === id);

    let filtered = alreadyChosen.filter((skill) => {
      return skill.id !== id;
    });
    setAllSkills([...allSkills, toAddBack]);
    setmySkills(filtered);
  };

  const updateSkills = () => {
    handleSkills(mySkills);
  };

  useEffect(() => {
    if (mySkills.length < 1) {
      errors.skills = "Add at least 1 skill";
    }
    updateSkills();
  }, [mySkills]);

  useEffect(() => {
    getSkills();
  }, []);
  return (
    <div className="form">
      {" "}
      <h2>Tell us about your skills</h2>
      <div className="form-inputs">
        <select
          name="skills"
          id="skills"
          onChange={(e) => {
            handleOption(e);
          }}
        >
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
          onChange={(e) => {
            handleInput(e);
          }}
          className="experience"
          type="number"
          value={experience}
          placeholder="Experience Duration in Years"
        />

        <button className="add-language" onClick={addSkill}>
          Add Programming Language
        </button>

        {mySkills &&
          mySkills.map((myskill) => {
            let name = skills
              .filter((skill) => {
                return myskill.id === skill.id;
              })
              .map((skill) => skill.title);
            return (
              <div key={myskill.id} className="skill">
                <span className="skill-name">{name}</span>
                <span className="skill-experience">
                  Years of Experience: {myskill.experience}
                </span>
                <img
                  onClick={() => removeSkill(myskill.id)}
                  src="../../Remove.png"
                  alt=""
                />
              </div>
            );
          })}
      </div>
      {errors.skills && <p>{errors.skills}</p>}
      {skillError &&
        skillError.map((error) => {
          return <p key={error}>{error}</p>;
        })}
    </div>
  );
}
