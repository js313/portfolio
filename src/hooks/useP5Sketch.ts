import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { shouldUseStatic } from "config";
import FallbackSketches from "../api/fallback/sketches.json";

interface FallbackSketchesType {
  [key: string]: { data: string };
}

const fallbackSketches: FallbackSketchesType = FallbackSketches;

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

      try {
        if (!shouldUseStatic) {
          const response = await axiosInstance.get<string>(
            `/projects/${id}/p5sketch`,
            {
              headers: {
                Accept: "text/plain",
              },
            }
          );
          return response.data;
        }
      } catch (error) {
        console.warn(`API call failed for ID: ${id}, using fallback JSON`);
      }

      // Return fallback data based on the project ID
      const fallbackSketch = fallbackSketches[String(id)];
      if (!fallbackSketch) {
        throw new Error(`No fallback data found for ID: ${id}`);
      }
      return fallbackSketch.data;
    },
    enabled: !!id,
    ...options,
  });
};
