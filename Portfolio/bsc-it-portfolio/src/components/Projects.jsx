import React from "react";

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", description: "Built with React.js", link: "#" },
    { name: "E-Commerce Website", description: "MERN Stack", link: "#" },
    { name: "To-Do App", description: "React & Firebase", link: "#" }
  ];

  return (
    <section id="projects" className="p-8 bg-blue-900 text-white">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-green-400">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
