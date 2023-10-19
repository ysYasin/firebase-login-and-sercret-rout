import React, { useContext } from "react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { userContext } from "../../Providers/Userproviders";

const Nave = () => {
  const { user, logout } = useContext(userContext);

  //handleSignOut
  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <li>
                <Link to="/home">Homepage</Link>
              </li>
            )}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">registration</Link>
            </li>
            {user && (
              <li>
                <Link to="/order">order</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl">AuthGuy</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {user ? (
          <div className="flex gap-2 items-center">
            <h4 className="text-xl font-semibold">{user.displayName}</h4>
            <button onClick={handleSignOut} className="btn btn-sm">
              <ArrowRightOnRectangleIcon className="h-4 w-4 text-black" />
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-xs">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nave;
