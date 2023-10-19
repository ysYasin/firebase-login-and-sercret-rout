import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Providers/Userproviders";

const Register = () => {
  const { signUpByEmailAndPassword, error } = useContext(userContext);

  function hangleRegisterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpByEmailAndPassword(email, password, name);
    form.reset();
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">Please Ragister!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hangleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name Here"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <p>
                <small>{error}</small>
              </p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  register
                </button>
              </div>

              <Link
                to="/login"
                className="my-4 text-center hover:text-blue-300"
              >
                Allready have an account ? Please Login!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
