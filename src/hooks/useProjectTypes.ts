import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { ProjectType } from "types/project-type";
import projectTypesFallback from "../api/fallback/projectTypes.json";

export const useProjectTypes = (options?: UseQueryOptions<ProjectType[]>) => {
  const shouldUseStatic = process.env.REACT_APP_SHOW_STATIC === "true";

  return useQuery<ProjectType[], Error>({
    queryKey: ["project-types"],
    queryFn: async () => {
      try {
        if (!shouldUseStatic) {
          const response = await axiosInstance.get("/project-types");
          return response.data;
        }
      } catch (error) {
        console.warn("API call failed, using fallback JSON.");
      }

      return projectTypesFallback;
    },
    ...options,
  });
};
