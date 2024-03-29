//\\ بسم الله الرحمن الرحيم //\\

//ourimports
import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Usercontext from "../context/Usercontext";
//ourimports

export const Register = () => {
  //

  //used use state
  const [userinfo, setUserinfo] = useState({});
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();

  //used mutation
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userinfo),
    onSuccess: () => {
      setUser(true);
      // navigate to home page

      //lastchange
      navigate("/me");
    },
  });

  const handleChange = (e) => {
    if (e.target.name == "image") {
      setUserinfo({ ...userinfo, [e.target.name]: e.target.files[0] });
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
        flexDirection: "column",
      }}
    >
      <div>
        <div>
          <h1> Welcome to Ruloka$BANK! </h1>
        </div>
      </div>
      <div
        className="nav-item nav-link text-white bg-danger"
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
            placeholder="please not abc or 123"
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
          <button
            onClick={() => {
              //alert("dhsjdh");
              mutate();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
