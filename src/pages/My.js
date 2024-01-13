//\\ بسم الله الرحمن الرحيم //\\

import React from "react";
import { useState } from "react";

export const My = () => {
  const [x, setx] = useState("write here");

  function handlechange(event) {
    setx(event.target.value);
  }

  return (
    <div>
      <div>
        Searchingbar
        <label>Search</label>
        <p>{x}</p>
        <input onChange={handlechange} />
      </div>
      <div>
        <h1>Deposit</h1>
        <input name="username"></input>
      </div>
    </div>
  );
};
