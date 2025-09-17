import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"];

  return (
    <section id="skills" className="p-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-500 px-4 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
