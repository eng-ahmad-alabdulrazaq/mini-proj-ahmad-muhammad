import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Usercontext from "./context/Usercontext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  return (
    <Usercontext.Provider value={[user, setUser]}>
      <div className="App">
        {/* NAV BAR HERE */}
        <Navbar />
        <Outlet />
      </div>
    </Usercontext.Provider>
  );
}

export default App;
