import { HttpClient } from "../../utils/constants/httpClient";

let httpClient = new HttpClient();

export const getRegions = async () => {
  const response = await httpClient.get("regions/active");
  return response;
};
