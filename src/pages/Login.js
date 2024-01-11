//\\ بسم الله الرحمن الرحيم //\\

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../api/auth";

//our imports

//our imports

export const Login = () => {
  //used use state
  const [userdata, setUserdata] = useState({});

  //used mutation
  const { mutate } = useMutation({
    mutationKey: [`login`],
    mutationFn: () => login(userdata),
  });
  // const navigate = useNavigate();
  //

  //
  const handleUserInput = (e) => {
    // console.log("e.target.value");
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "20%",
          height: "50%",
          border: "1px solid black",
          borderRadius: "12px",
          gap: "5px",
        }}
      >
        <h2>Login</h2>
        <p>username</p>
        <input name="username" onChange={handleUserInput}></input>
        <p>password</p>
        <input name="password" onChange={handleUserInput}></input>
        <button onClick={mutate}>login</button>
      </div>
    </div>
  );
};
