import React from "react";
import { Project } from "types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex items-start text-left">
      <img
        src={project.image}
        alt={project.name}
        className="w-16 h-16 object-cover rounded mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
        <p className="text-sm text-secondary mb-2">
          {project.type.displayName}
        </p>
        <p className="text-sm text-gray-600 mb-2">{project.description}</p>
        <div className="flex">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline mr-2"
          >
            GitHub
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline mr-2"
            >
              Live Demo
            </a>
          )}
          {project.itchIoLink && (
            <a
              href={project.itchIoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              Itch.io
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
