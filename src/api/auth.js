//\\ بسم الله الرحمن الرحيم //\\
import instance from ".";
const login = async (data) => {
  const res = await instance.post("/auth/login", data);
  return res;
};
export default login;
