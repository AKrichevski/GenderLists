import axios from "axios";

export const baseURL = 'https://randomuser.me/api/';

export const apiGet = async (apiUrl) => {
  let url = baseURL + apiUrl;
  return axios.get(url).then(res => res.data);
}

