//\\ بسم الله الرحمن الرحيم //\\

import React from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

export const Me = ({ id }) => {
  const { data: users } = useQuery({
    queryKey: ["user"],
    queryFn: () => me(),
  });

  return (
    <div>
      <div>
        <h2>User</h2>
        <div>
          <div>
            <h1>{users?.username}</h1>
            <img
              src={`https://react-bank-project.eapi.joincoded.com/${users?.image}`}
              alt="User"
            />
            <p>{users?.balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
