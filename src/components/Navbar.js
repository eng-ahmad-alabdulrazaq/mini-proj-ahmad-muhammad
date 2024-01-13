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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {/* Navbar */}
        Ruloka$BANK!
        {/* Navbar */}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink class="nav-item nav-link active" to="/">
            Home
          </NavLink>

          {user == true ? (
            <>
              <NavLink class="nav-item nav-link " to="/me">
                Me
              </NavLink>

              <NavLink class="nav-item nav-link " to="/my">
                My
              </NavLink>

              <NavLink class="nav-item nav-link " to="/users">
                Users
              </NavLink>

              <NavLink class="nav-item nav-link disabled" to="deposit">
                Deposit
              </NavLink>

              <NavLink class="nav-item nav-link " to="transfer">
                Transfer
              </NavLink>

              <NavLink class="nav-item nav-link " to="withdraw">
                Withdraw
              </NavLink>
              <button
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
              <NavLink class="nav-item nav-link" to="/register">
                Register
              </NavLink>
              .
              <NavLink class="nav-item nav-link" to="login">
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
