import React, { useContext } from "react";
import { userContext } from "../Providers/Userproviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  if (loading) {
    return (
      <div className="flex h-100 items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
};

export default PrivateRoute;
