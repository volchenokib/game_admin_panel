import axios from "axios";

export default () => {
  const options = {
    headers: {},
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
  };

  const instance = axios.create(options);

  instance.interceptors.request.use(
    (req) => {
      return req;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};
