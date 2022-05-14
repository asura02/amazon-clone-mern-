import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
import LoginSignUp from "../User/LoginSignUp";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const isAuth = () => {
    // console.log("hello");
    if (isAuthenticated) {
      // console.log("true");
      return true;
    } else {
      // console.log("false");
      return false;
    }
  };

  return isAuth() ? <Outlet /> : <LoginSignUp />;
};

export default ProtectedRoute;
