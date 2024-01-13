//\\ بسم الله الرحمن الرحيم //\\

import React from "react";
import { useState } from "react";
import { transactions } from "../api/auth";
import { Mutation, useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

export const My = () => {
  const { data: transactionsData } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactions(),
  });

  // console.log(users);
  //
  //
  //
  const handleUserInput = (e) => {
    // console.log("e.target.value");
    //
    // setUserdata({ data });
  };
  //

  console.log(transactionsData);

  return (
    <div>
      <div>
        <h2>transactions</h2>
        <div class="d-flex flex-wrap gap-3 justify-content-center ">
          {transactionsData?.map((transaction) => (
            <div key={transaction.id} className="col-3">
              <h1>{transaction?.type}</h1>

              {/* <img
                src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
                alt="User"
                width={"120px"}
                height={"120px"}
              /> */}
              <p>{transaction?.amount}</p>
              <p>{transaction?.createdAt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
