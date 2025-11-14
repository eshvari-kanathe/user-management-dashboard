import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./privateRoute";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
