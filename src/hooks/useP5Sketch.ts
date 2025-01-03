import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export const useP5Sketch = (
  id: string | number | null,
  options?: UseQueryOptions<string>
) => {
  return useQuery<string, Error>({
    queryKey: ["p5Sketch", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("No project ID provided.");
      }

      const response = await axiosInstance.get<string>(
        `/projects/${id}/p5sketch`,
        {
          headers: {
            Accept: "text/plain",
          },
        }
      );
      return response.data;
    },
    enabled: !!id, // Only run the query if ID is provided
    ...options,
  });
};
