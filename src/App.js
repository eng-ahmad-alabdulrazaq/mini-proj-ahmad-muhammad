import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      {/* NAV BAR HERE */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
