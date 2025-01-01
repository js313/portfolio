import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import axiosInstance from "api/axios";
import { AxiosResponse } from "axios";
import { Contact } from "types/contact";

export const useContact = (
  options?: UseMutationOptions<AxiosResponse<any>, Error, Contact>
): UseMutationResult<AxiosResponse<any>, Error, Contact> => {
  return useMutation<AxiosResponse<any>, Error, Contact>({
    mutationFn: (data: Contact) => {
      return axiosInstance.post("/contact", data);
    },
    ...options,
  });
};
