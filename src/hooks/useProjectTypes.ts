import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { ProjectType } from "types/project-type";

export const useProjectTypes = (options?: UseQueryOptions<ProjectType[]>) => {
  return useQuery<ProjectType[], Error>({
    queryKey: ["project-types"],
    queryFn: async () => {
      const response = await axiosInstance.get<ProjectType[]>("/project-types");
      return response.data;
    },
    ...options,
  });
};
