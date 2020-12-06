import axios from "axios";

const API_BASE_URL = "https://opentdb.com/api.php";

const getInstance = () => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  });
};

/**
 * Build a get instance of axios
 * @param path
 * @param params
 */
export const get = (path: string, params?: {} | null) => {
  let options = {};

  if (params) {
    options = { params };
  }

  return getInstance().get(path, options);
};
