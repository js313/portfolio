import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export const useResume = (
  options?: UseMutationOptions<string, Error, void, unknown>
) => {
  return useMutation<string, Error, void>({
    mutationFn: async () => {
      const shouldUseStatic = process.env.REACT_APP_SHOW_STATIC === "true";
      let fileURL = "/resume/resume.pdf"; // Fallback to static file

      if (shouldUseStatic) {
        return fileURL;
      }

      try {
        const response = await axiosInstance.get("/resume/download", {
          responseType: "blob",
        });

        if (response.status === 200) {
          fileURL = URL.createObjectURL(response.data);
        }
      } finally {
        return fileURL;
      }
    },
    ...options,
  });
};
