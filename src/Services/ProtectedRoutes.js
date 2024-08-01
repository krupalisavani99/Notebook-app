import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = JSON.parse(localStorage.getItem("loggedin"));
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
