import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Usercontext from "./context/Usercontext";
import { useEffect, useState } from "react";
import { getToken } from "./api/storage";
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(true);
    }
  }, []);

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
