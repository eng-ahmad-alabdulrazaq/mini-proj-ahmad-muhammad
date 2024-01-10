//\\ بسم الله الرحمن الرحيم //\\

import React from "react";

export const Home = () => {
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
          width: "56%",
          height: "50%",
          // border: "1px solid black",
          // borderRadius: "12px",
          gap: "5px",
        }}
      >
        <h1>Ruloka$BANK!</h1>
        <p>
          Welcome to our bank, by achieving time travel using hogwartz dark
          magic we managed to create artificial gold you know that shiny clunk
          of metal everyone payed for now we can assure you insain diamond
          credit that will assure taxfree money laundry as you are well aware
          diamonds are forever.
        </p>
      </div>
    </div>
  );
};
