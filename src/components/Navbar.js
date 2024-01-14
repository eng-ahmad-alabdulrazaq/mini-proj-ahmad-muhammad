import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteToken } from "../api/storage";
import Usercontext from "../context/Usercontext";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  //new usecontext and nav
  const [user, setUser] = useContext(Usercontext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand text-white bg-danger">
        {/* Navbar */}
        Ruloka$BANK!
        {/* Navbar */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link text-danger bg-white" to="/">
            Home
          </NavLink>

          {user == true ? (
            <>
              <NavLink
                className="nav-item nav-link text-danger bg-white"
                to="/me"
              >
                Me
              </NavLink>

              <NavLink
                className="nav-item nav-link text-danger bg-white"
                to="/my"
              >
                My
              </NavLink>

              <NavLink
                className="nav-item nav-link text-danger bg-white"
                to="/users"
              >
                Users
              </NavLink>

              <NavLink
                className="nav-item nav-link text-danger bg-white"
                to="/deposit"
              >
                {/* Deposit */}
                Operations
                {/* the same except for the string in the navbar */}
              </NavLink>

              {/* <NavLink className="nav-item nav-link " to="transfer">
                Transfer
              </NavLink>

              <NavLink class="nav-item nav-link " to="withdraw">
                Withdraw
              </NavLink> */}
              <button
                className="navbar-brand text-white bg-danger"
                onClick={() => {
                  deleteToken();
                  setUser(false);
                  navigate("/");
                }}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className="nav-item nav-link text-white bg-danger"
                to="/register"
              >
                Register
              </NavLink>
              .
              <NavLink
                className="nav-item nav-link text-white bg-danger"
                to="login"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
