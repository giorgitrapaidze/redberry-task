import React from "react";

export default function Skills(props) {
  const { mySkills, app } = props;
  return (
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
            className="skill form-skill"
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
  );
}
