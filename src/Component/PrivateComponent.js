import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("login");
  return <div>{auth ? <Outlet /> : <Navigate to="/login"></Navigate>}</div>;
};

export default PrivateComponent;
