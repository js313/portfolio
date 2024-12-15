import { ProjectType } from "./project-type";

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  githubLink: string;
  itchIoLink: string | null;
  projectLink: string | null;
  type: ProjectType;
}
