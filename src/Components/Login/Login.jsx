import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../../Providers/Userproviders";

const Login = () => {
  const { signInByPassword } = useContext(userContext);
  const navigate = useNavigate();

  const hangleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //importet function from userProvider page, to login/signin
    signInByPassword(email, password)
      .then((result) => {
        alert("login successfull");
        form.reset();
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">Please Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hangleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Here"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>

              <Link to="/register" className="my-4 hover:text-blue-300">
                New on AuthGuy ? Please register!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
