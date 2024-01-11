//\\ بسم الله الرحمن الرحيم //\\

//ourimports
import React, { useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
//ourimports

export const Register = () => {
  //
  //used mutation
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userinfo),
  });
  //used use state
  const [userinfo, setUserinfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name == "image") {
      setUserinfo({ ...userinfo, [e.target.name]: e.target.file[0] });
    } else {
      // console.log("e.target.value");
      setUserinfo({ ...userinfo, [e.target.name]: e.target.value });
    }
  };

  //

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
          width: "30%",
          height: "60%",
          border: "1px solid black",
          borderRadius: "12px",
          gap: "5px",
        }}
      >
        <h2>Register</h2>

        <div>
          <p>Username</p>
          <input
            placeholder="write here DUH!"
            name="username"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            placeholder="Really?"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Profile Image come on monalisa</p>
          <input
            placeholder="monalisa"
            name="image"
            type="file"
            onChange={handleChange}
          />
        </div>

        <div>
          <button onClick={mutate}>Register</button>
        </div>
      </div>
    </div>
  );
};
