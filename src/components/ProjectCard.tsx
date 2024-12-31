import React from "react";
import { Project } from "types/project";

interface ProjectCardProps {
  project: Project;
}

// Masonry Grid layout
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-clear shadow-lg rounded-lg overflow-hidden group">
      {/* Image with Gradient */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full md:h-56 h-44 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent transition-all duration-300 flex flex-col justify-end p-4">
          <h3 className="text-lg font-bold text-primary group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {project.name}
          </h3>
          <p className="text-sm text-gray-300 group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {project.type.displayName}
          </p>
        </div>
      </div>

      {/* Description and Links */}
      <div className="p-2">
        <p className="text-sm text-secondary hidden md:block">
          {project.description}
        </p>
        <div className="flex space-x-2 md:mt-2">
          <a
            href={project.githubLink}
            className="text-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              className="text-secondary hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          )}
          {project.itchIoLink && (
            <a
              href={project.itchIoLink}
              className="text-secondary hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
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
