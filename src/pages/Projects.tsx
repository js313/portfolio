import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

type ProjectCategory = "web" | "game" | "creative";

const Projects: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory>("web");

  const projects = {
    web: [{ title: "Portfolio", description: "My website", githubLink: "#", imageSrc: "/path/to/image.jpg" }],
    game: [],
    creative: [],
  };

  return (
    <div className="p-12">
      <div className="flex space-x-4">
        <button onClick={() => setCategory("web")}>Web Dev</button>
        <button onClick={() => setCategory("game")}>Game Dev</button>
        <button onClick={() => setCategory("creative")}>Creative Scripts</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projects[category].map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
