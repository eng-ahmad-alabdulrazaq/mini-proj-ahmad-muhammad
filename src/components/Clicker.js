import { useState } from "react";

function Clicker() {
  const [counter, setcounter] = useState(0);

  const increment = () => {
    setcounter(counter + 1);
  };
  return (
    <div onClick={increment}>
      <h1>clicked me</h1>
      <p> Current x is {counter}</p>
    </div>
  );
}
export default Clicker;
