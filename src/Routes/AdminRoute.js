import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();

  if (!admin) {
    return (
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
