//\\ بسم الله الرحمن الرحيم //\\

import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/*  */}
      {/* where navbar and outlet use to be  */}
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
        <div
          //saturday style
          class="p-3 mb-2 bg-danger text-white"
          //saturday style
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
          <h1

          // style={{
          //   font: "revert-layer",
          // }}
          >
            Ruloka$BANK!
          </h1>
          <p>
            Welcome to our bank, by achieving time travel using hogwartz dark
            magic we managed to create artificial gold you know that shiny clunk
            of metal everyone payed for now we can assure you insain diamond
            credit that will assure taxfree money laundry as you are well aware
            diamonds are forever.
          </p>
        </div>
      </div>
    </div>
  );
};
