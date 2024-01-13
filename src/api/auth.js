//\\ بسم الله الرحمن الرحيم //\\
import instance from ".";
import { getToken, saveToken } from "./storage";
//

//

const login = async (data) => {
  const res = await instance.post("/mini-project/api/auth/login", data);
  //save token
  const token = res.data.token;
  if (token) {
    saveToken(token);
  }
  return res.data;
};

//

const register = async (userinfo) => {
  const formdata = new FormData();
  //
  for (let key in userinfo) {
    formdata.append(key, userinfo[key]);
  }
  const res = await instance.post("/mini-project/api/auth/register", formdata);
  const token = res.data.token;

  if (token) {
    saveToken(token);
  }
  return res.data;
};

//NEW
// for me
const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");

  return data;
};
const update = async () => {
  const { data } = await instance.put("/mini-project/api/auth/profile");
};
// for all user
const getallusers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  if (data.token) getToken(data.token);
  return data;
};
///
const transactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");

  return data;
};
//

const transfer = async (userInfo) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${userInfo.username}`,
    userInfo
  );
  return data;
};

//
const deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    { amount }
  );
  return data;
};
//
const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    { amount }
  );
  return data;
};
//
export {
  login,
  register,
  me,
  getallusers,
  transfer,
  deposit,
  withdraw,
  transactions,
  update,
};
