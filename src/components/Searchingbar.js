import React, { useState } from "react";

const Searchingbar = () => {
  const [x, setx] = useState("write here");

  function handlechange(event) {
    setx(event.target.value);
  }

  return (
    <div>
      Searchingbar
      <label>Search</label>
      <p>{x}</p>
      <input onChange={handlechange} />
    </div>
  );
};

export default Searchingbar;
