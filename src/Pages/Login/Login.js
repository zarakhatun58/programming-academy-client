import React from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useFirebase from "../../hooks/useFirebase.js";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const {
    signInWithGoogle,
    user,
    setUser,
    saveUser,
    logOut,
    setIsLoading,
    handleEmailLogin,
  } = useFirebase();

  const navigate = useNavigate();
  const location = useLocation();

  const url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        saveUser(user.email, user.displayName, "PUT");
        navigate.push(url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogOut = () => {
    setIsLoading(true);
    logOut()
      .then((res) => {
        setUser({});
        navigate.push("/home");
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    handleEmailLogin(data.email, data.password);
    reset();
  };
  return (
    <>
      <div className="bg-light py-5">
        <div className=" pb-5">
          <h3 className="text-center  pb-3">Login</h3>
          <div className="w-75 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                className="form-control  mb-3"
                {...register("email")}
                placeholder="Your Email"
                required
              />
              <input
                type="password"
                className="form-control  mb-3"
                {...register("password")}
                placeholder="Your password"
                required
              />
              <button className="btn btn-primary w-100 fw-bold" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto p-0">
          <div className="text-center">
            {!user?.displayName ? (
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary text-white"
              >
                Google sign In
              </button>
            ) : (
              <button
                onClick={handleLogOut}
                className="btn btn-primary mt-3 text-white"
              >
                Log Out
              </button>
            )}
            <br />
            <Link
              className="text-success"
              style={{
                textDecoration: "none",
                color: "#000",
                marginTop: "10px",
              }}
              to="/register"
            >
              New User ? Please Register
            </Link>
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
