import axios from "axios";

const API_BASE_URL = "https://opentdb.com/api.php";

const getInstance = () => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  });
};

export const get = (path, params) => {
  let options = null;
  console.log("get");
  console.log(path);
  console.log(params);

  if (params) {
    options = { params };
  }

  return getInstance().get(path, options);
};
