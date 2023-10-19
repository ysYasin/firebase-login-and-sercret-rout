import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Userproviders from "./Providers/Userproviders";
import Layout from "./Components/Layout/Layout";
import Order from "./Components/Order";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Userproviders>
      <RouterProvider router={router}></RouterProvider>
    </Userproviders>
  </React.StrictMode>
);
