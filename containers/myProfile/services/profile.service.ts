import { Client } from "~containers/fidSpace/types";
import apiClient from "~utils/apiClient";
import { IClientDto, IProfileFields } from "./types";

export const updateClient = async (fields: IProfileFields): Promise<void> => {
  const clientDto: IClientDto = {
    firstName: fields.firstName,
    lastName: fields.lastName,
    gender: fields.gender,
    email: fields.email,
    birthDate: fields.birthDate ? new Date(fields.birthDate) : undefined,
    address: fields.address,
    city: fields.city,
    familySituation: fields.familySituation,
    kidsNimber: fields.numberOfKids,
    profession: fields.profession

  };
  const client = await apiClient.put<Client, IClientDto>(
    "clients",
    { data: clientDto },
  );
  if (typeof window !== undefined) {
    localStorage.setItem("phoneNumber", client.phoneNumber);
  }
};
export const getProfileCompeltionScore = async (): Promise<number> => {
  const profileCompletionPercentage = await apiClient.get<number>(
    "clients/complete-profile-percentage",
  );
  return profileCompletionPercentage;
};
export interface cityDto {
  id: string,
  name: string,
}
export const getCities = async (): Promise<cityDto[]> => {
  const cities: cityDto[] = await apiClient.get<cityDto[]>(
    "global-param/cities",
  );
  return cities;
};
export default {
  updateClient,
  getProfileCompeltionScore,
  getCities
};
