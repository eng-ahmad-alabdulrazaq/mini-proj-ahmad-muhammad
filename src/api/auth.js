//\\ بسم الله الرحمن الرحيم //\\
import instance from ".";
import { saveToken } from "./storage";
//

const login = async (data) => {
  const res = await instance.post("/mini-project/api/auth/login", data);
  //save token
  if (res.Token) saveToken(res.Token);
  return res;
};

//

const register = async (userinfo) => {
  const formdata = new FormData();
  //
  for (let key in userinfo) {
    formdata.append(key, userinfo[key]);
  }
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formdata
  );

  if (data.token) {
    saveToken(data.token);
  }
  return data;
};

export { login, register };
