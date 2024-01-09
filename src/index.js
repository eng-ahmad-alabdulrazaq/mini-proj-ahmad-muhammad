//\\ بسم الله الرحمن الرحيم //\\
//router setup
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//ourimports
import { useQueryClient } from "@tanstack/react-query";
//ourimports

const queryClient = new useQueryClient();

//
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/tansfer",
    element: <Transfer />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <QueryClientProvider client={queryClient}>
      {/* <Todos /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
//router setup

//     <App />

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
