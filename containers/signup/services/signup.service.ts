import { Client } from "~containers/fidSpace/types";
import apiClient from "~utils/apiClient";
import { IClientDto, ISignUpFields } from "../types";
import { removeWhiteSpace } from "./utils";

export const saveClient = async (fields: ISignUpFields): Promise<void> => {
  const clientDto: IClientDto = {
    firstName: fields.firstName,
    lastName: fields.lastName,
    password: fields.password,
    gender: fields.gender,
    phoneNumber: removeWhiteSpace(fields.phoneNumber),
    email: fields.email,
    birthDate: fields.birthDate ? new Date(fields.birthDate) : undefined,
  };
  const client = await apiClient.post<Client, IClientDto>(
    "authentication/sign-up",
    { data: clientDto },
  );
  if (typeof window !== undefined) {
    localStorage.setItem("phoneNumber", client.phoneNumber);
  }
};
export default {
  saveClient,
};
