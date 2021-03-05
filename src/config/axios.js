import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export default axiosConfig;
