import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { Project } from "types/project";
import ProjectsFallback from "../api/fallback/projects.json";
import { shouldUseStatic } from "config";

export const useProjects = (options?: UseQueryOptions<Project[]>) => {
  return useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        if (!shouldUseStatic) {
          const response = await axiosInstance.get<Project[]>("/projects");
          return response.data;
        }
      } catch (error) {
        console.warn("API call failed, using fallback JSON");
      }
      return ProjectsFallback;
    },
    ...options,
  });
};
