import React, { useContext } from "react";
import { userContext } from "../../Providers/Userproviders";

const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div className="w-6/12 border-2 mx-auto my-24 p-7">
      <h1>
        My Name is{" "}
        {user
          ? user.displayName
          : `${(
              <small>
                <em>Please add your name</em>
              </small>
            )}`}
      </h1>

      <p>
        email:{" "}
        {user
          ? user.email
          : `${(
              <small>
                <em>Please add your email</em>
              </small>
            )}`}
      </p>
    </div>
  );
};

export default Home;
