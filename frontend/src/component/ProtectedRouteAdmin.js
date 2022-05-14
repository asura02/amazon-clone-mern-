import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
import LoginSignUp from "./User/LoginSignUp";

const ProtectedRouteAdmin = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const isAuth = () => {
    if (isAuthenticated) {
      if (user.role == "admin") {
        return true;
      }
      return false;
    } else {
      return false;
    }
  };

  return isAuth() ? <Outlet /> : <LoginSignUp />;
};

export default ProtectedRouteAdmin;
