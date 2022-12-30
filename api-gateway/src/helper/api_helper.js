import axios from "axios";

export const apiHelper = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 10000,
  });
};
