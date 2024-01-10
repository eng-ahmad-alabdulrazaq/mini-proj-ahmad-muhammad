//\\ بسم الله الرحمن الرحيم //\\
import instance from ".";
const login = async (data) => {
  const res = await instance.post("/auth/login", data);
  return res;
};

const register = async (data) => {
  const formdata = new FormData();

  for (let key in data) {
    // console.log(key);
    formdata.append(key, data[key]);
  }

  //replaced with for loop
  // formdata.append(`username`, data.username);
  // formdata.append(`password`, data.password);
  // formdata.append(`image`, data.image);

  const res = await instance.post("/auth/register", data);
  return res;
};
export { login, register };
