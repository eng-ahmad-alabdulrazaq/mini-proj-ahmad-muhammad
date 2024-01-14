//\\ بسم الله الرحمن الرحيم //\\
//our imports
import React, { useState } from "react";
import { deposit, me, withdraw, transfer } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//our imports
export const Deposit = () => {
  const client = useQueryClient();
  const [userdata, setUserdata] = useState({});
  const handleUserInput = (e) => {
    // console.log("e.target.value");
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };
  // return <div>Deposit</div>;//old
  //from Register.js
  //deposit function
  const [counter, setCounter] = useState(0);
  function IncOnClick(x) {
    // trial and error
    // parseInt(x);
    x = Number(x);
    // trial and error
    setCounter(counter + x);
  }
  //deposit function
  //amount function
  const [amount, setAmount] = useState(""); //tried let
  const useramount = (e) => {
    //tried let
    setAmount(e.target.value);
    // trial and error
    // parseInt()
    // amount = amount + amount;
    // amount = +amount;
    // amount = amount + amount;
    // amount = amount +
    // amount = Number(amount);
    // amount = counter + amount;
    // trial and error
  };

  console.log(amount);

  //amount function
  //withdraw function
  function DecOnClick(x) {
    // trial and error
    // parseInt(x);
    x = Number(x);
    // trial and error
    setCounter(counter - x);
  }
  //withdraw function
  ////
  const { mutate: depositM } = useMutation({
    mutationKey: [`deposit`],
    mutationFn: () => deposit(amount),
  });

  const { mutate: withdrawM } = useMutation({
    mutationKey: [`withdraw`],
    mutationFn: () => withdraw(amount),
    //

    //
  });

  //
  const { data: users } = useQuery({
    queryKey: ["user"],
    queryFn: () => me(),
    onSuccess: client.invalidateQueries(),
  });
  //
  const { mutate: transferM } = useMutation({
    mutationKey: [`transfer`],
    mutationFn: () => transfer(userdata),
  });
  //
  return (
    <div
    // if amount negative

    // amount <0

    // : { backgroundColor: "red" }

    // if amount negative
    >
      {/* {amount > users.balance ? alert("your broke dude") : <></>} */}
      <div
        class="p-3 mb-2 bg-danger text-white"
        //oldstyle
        style={{
          width: "100vw",
          height: "12.5vh",
          display: "flex",
          gap: "25vw",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          border: "1px solid black",
          borderRadius: "12px",
        }}
        //oldstyle
      >
        {/*  */}
        <div>
          <h1>Deposit</h1>
        </div>
        {/*  */}
        <div>
          <h1>Withdraw</h1>
        </div>
        {/*  */}
        <div>
          <h1>Transfer</h1>
        </div>
      </div>
      <h1>your current balance is {users?.balance}</h1>

      {/*  */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  */}
        <div
          //saturday style
          class="p-3 mb-2 bg-danger text-white"
          //saturday style
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
          <h2>Deposit</h2>
          <input
            type="number"
            placeholder="deposit amount"
            onChange={useramount}
          />

          <button
            onClick={() => depositM()}
            //

            //
          >
            click here to deposit
          </button>
        </div>
        {/*  */}
        {/*  */}
        <div
          //saturday style
          class="p-3 mb-2 bg-danger text-white"
          //saturday style
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
          {/* {amount > users.balance ? alert("your broke dude") : <></>} */}

          <h2>Withdraw</h2>
          <input
            type="number"
            placeholder="withdraw amount"
            onChange={useramount}
          />
          {/* {amount > users.balance ? alert("your broke dude") : <></>} */}

          <button
            // class={amount > users.balance ? alert("your broke dude") : <></>}
            onClick={() => {
              //check if valid operation
              if (amount > users.balance) alert("your broke dude");
              //check if valid operation
              withdrawM();
            }}
          >
            click here to withdraw
          </button>
        </div>
        {/*  */}
        {/*  */}
        <div
          //saturday style
          class="p-3 mb-2 bg-danger text-white"
          //saturday style
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
          <h2>Transfer</h2>
          <input
            type="number"
            name="amount"
            placeholder="transfer amount"
            onChange={handleUserInput}
          />

          <input
            name="username"
            placeholder="transfer acount username"
            onChange={handleUserInput}
          />
          {/* inside button below */}
          {/* onClick={() => IncOnClick(amount) } */}
          {/* inside button below */}
          <button
            onClick={() => {
              //check if valid operation
              if (amount > users.balance) alert("your broke dude");
              //check if valid operation
              transferM();
            }}
          >
            click here to transfer
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
  //from Register.js
};
