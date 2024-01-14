//\\ بسم الله الرحمن الرحيم //\\
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getallusers, transfer } from "../api/auth";
import { Me } from "./Me";

export const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getallusers,
  });
  const { mutate } = useMutation({
    mutationKey: [`login`],
    mutationFn: () => transfer(),
  });
  console.log(users);
  //
  //
  //
  const handleUserInput = (e) => {
    // console.log("e.target.value");
    //
    // setUserdata({ data });
  };
  //
  const User = { data: users }.data?.data
    ?.filter((user) =>
      user.name?.tolowerCase().includes({ data: users }.tolowerCase())
    )
    .map((user) => <Me user={user} key={user.id} />);

  return (
    <div>
      <div
        //saturday style
        class="p-3 mb-2 bg-danger text-white"

        //saturdaystyele
      >
        <h2>Users</h2>
        <div class="d-flex flex-wrap gap-3 justify-content-center ">
          {users?.map((user) => (
            <div key={user.id} className="col-3">
              <h1>{user?.username}</h1>

              <img
                src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
                alt="User"
                width={"120px"}
                height={"120px"}
              />
              <p>{user?.balance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
