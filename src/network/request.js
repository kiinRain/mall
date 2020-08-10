import axios from "axios";
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 100000
  });
  instance.interceptors.response.use(
    res => {
      // Do something before res is sent
      // console.log(res);
      return res.data;
    },
    error => {
      // Do something with res error
      console.log(error);
    }
  );
  return instance(config);
}
