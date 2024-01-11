import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
            {/* <span class="sr-only">(current)</span> */}
          </NavLink>
          .
          <NavLink class="nav-item nav-link" to="/register">
            {/* Features */}
            Register
          </NavLink>
          .
          <NavLink class="nav-item nav-link" to="login">
            Login
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="me">
            Me
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="my">
            My
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="users">
            Users
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="deposit">
            Deposit
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="transfer">
            Transfer
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="withdraw">
            Withdraw
          </NavLink>
          .
          <NavLink class="nav-item nav-link disabled" to="logout">
            Logout
          </NavLink>
          .
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
