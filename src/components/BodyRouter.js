import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProductsMain from "./buy/Products";
import Profile from "./userProfile/Profile";

const BodyRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => {
          return <HomePage routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/login"
        render={(routerProps) => {
          return <Login routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/register"
        render={(routerProps) => {
          return <Register routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/buy"
        render={(routerProps) => {
          return <ProductsMain routerProps={routerProps} />;
        }}
      />
      <Route
        exact
        path="/myprofile"
        render={(routerProps) => {
          return <Profile routerProps={routerProps} />;
        }}
      />
    </Switch>
  );
};

export default BodyRouter;
