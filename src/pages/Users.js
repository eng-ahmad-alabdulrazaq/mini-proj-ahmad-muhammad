//\\ بسم الله الرحمن الرحيم //\\
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getallusers } from "../api/auth";
import { Me } from "./Me";

export const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getallusers,
  });

  console.log(users);

  const User = { data: users }.data?.data
    ?.filter((user) =>
      user.name?.tolowerCase().includes({ data: users }.tolowerCase())
    )
    .map((user) => <Me user={user} key={user.id} />);

  return (
    <div>
      <div>
        <h2>Users</h2>
        <div>
          {users?.map((user) => (
            <div key={user.id}>
              <h1>{user.username}</h1>

              <img
                src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
                alt="User"
              />
              <p>{user.balance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
