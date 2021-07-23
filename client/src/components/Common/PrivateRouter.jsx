import React from "react";
import { Route, Redirect } from "react-router-dom";
import Utils from "./Utils";

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Utils.isUserAuthenticated() ? (
        <Component {...props} />
       
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRouter;
