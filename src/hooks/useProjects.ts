import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { Project } from "types/project";

export const useProjects = (options?: UseQueryOptions<Project[]>) => {
  return useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await axiosInstance.get<Project[]>("/projects");
      return response.data;
    },
    ...options,
  });
};
