import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axiosInstance from "api/axios";
import { AxiosResponse } from "axios";
import { Contact } from "types/contact";

export const useContact = (): UseMutationResult<
  AxiosResponse<any>,
  Error,
  Contact
> => {
  return useMutation<AxiosResponse<any>, Error, Contact>({
    mutationFn: (data: Contact) => axiosInstance.post("/contact", data),
  });
};
