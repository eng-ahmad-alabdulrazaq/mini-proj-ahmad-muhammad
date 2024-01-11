//\\ بسم الله الرحمن الرحيم //\\
//myimports
import axios from "axios";
import { getToken } from "./storage";

//myimports
const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com",
  //pasted from notion
});

//

instance.interceptors.request.use((config) => {
  const token = getToken();
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//

export default instance;
