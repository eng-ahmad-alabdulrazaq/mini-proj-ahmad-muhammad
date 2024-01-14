//\\ بسم الله الرحمن الرحيم //\\

import React from "react";
import { useState } from "react";
import { transactions } from "../api/auth";
import { Mutation, useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { type } from "@testing-library/user-event/dist/type";

export const My = () => {
  const [query, setquery] = useState("");
  //const [amount1, setamount1] = useState("");
  const [type, settype] = useState("");
  const { data: transactionsData } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactions(),
  });

  // console.log(users);
  //
  //
  const search = (e) => {
    setquery(e.target.value);
  };
  //
  const typeSelector = (e) => {
    settype(e.target.value);
  };
  //
  //const allamount = (e) => {
  // setamount1(e.target.value);
  //};
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>transactions</h2>
        <div style={{ width: "500px" }} className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={search}
          />
        </div>
        <br />
        Type:
        <select
          style={{ width: "500px" }}
          onChange={typeSelector}
          className="form-select"
        >
          <option value="" selected>
            All
          </option>
          <option value="deposit">deposit</option>
          <option value="withdraw">withdraw</option>
          <option value="transfer">transfer</option>
        </select>
      </div>
      <div class="d-flex flex-wrap gap-3 justify-content-center ">
        {transactionsData
          ?.filter((transaction) => {
            console.log(transaction);
            return (
              transaction?.createdAt?.includes(query) ||
              `${transaction?.amount}`.includes(query)
            );
          })
          ?.filter((transaction) => transaction?.type?.includes(type))
          ?.map((transaction) => (
            <div
              key={transaction.id}
              className="col-3"
              style={
                //if statement
                transaction.type == "deposit"
                  ? {
                      backgroundColor: "green",
                    }
                  : { backgroundColor: "red" }
                //if statement
              }
            >
              <h1>type:{transaction?.type}</h1>
              <p>amount:{transaction?.amount}</p>
              <p>createdAt:{transaction?.createdAt}</p>
              <p>from:{transaction?.from}</p>
              <p>to:{transaction?.to}</p>
              <p>updatedAt:{transaction?.updatedAt}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
