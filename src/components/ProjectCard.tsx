import React from "react";
import { Project } from "types/project";

interface ProjectCardProps {
  project: Project;
  onViewSketch: () => void;
}

// Masonry Grid layout
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewSketch }) => {
  return (
    <div className="bg-clear shadow-lg rounded-lg overflow-hidden group">
      {/* Image with Gradient */}
      <div className="relative">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.name}
            className="w-full md:h-56 h-44 object-cover border-2 border-secondary rounded-lg"
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent transition-all duration-300 flex flex-col justify-end p-4 pointer-events-none">
          <h3 className="text-lg font-bold text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {project.name}
          </h3>
          <p className="text-sm text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hidden md:block">
            {project.type.displayName}
          </p>
          <p className="text-sm text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:hidden block">
            {project.description}
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
            className="md:text-secondary hover:text-primary text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              className="md:text-secondary hover:text-primary text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          )}
          {/* projectLink and supportsRendering are mutually exclusive fields */}
          {/* Backend ensures that */}
          {project.supportsRendering && (
            <button
              onClick={onViewSketch}
              className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500"
              rel="noopener noreferrer"
            >
              Live
            </button>
          )}
          {project.itchIoLink && (
            <a
              href={project.itchIoLink}
              className="md:text-secondary hover:text-primary text-primary"
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
