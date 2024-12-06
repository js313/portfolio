import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  hostedLink?: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, hostedLink, imageSrc }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex space-x-4">
        <a href={githubLink} className="text-blue-500 hover:underline">GitHub</a>
        {hostedLink && <a href={hostedLink} className="text-blue-500 hover:underline">Live</a>}
      </div>
    </div>
  );
};

export default ProjectCard;
