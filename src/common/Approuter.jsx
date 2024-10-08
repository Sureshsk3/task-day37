import { Navigate } from "react-router-dom";
import React from "react";
import LoginApp from "../Components/LoginApp";
import SiginApp from "../Components/SiginApp";
import ForgotApp from "../Components/ForgotApp";
import OtpApp from "../Components/OtpApp";
import ResetApp from "../Components/ResetApp";

export default [
  {
    path: "/login",
    element: <><LoginApp/></>,
  },
  {
    path: "/signin",
    element: <><SiginApp/></>,
  },
  {
    path: "/forget",
    element: <><ForgotApp/></>,
  },
  {
    path: "/otp",
    element: <><OtpApp/></>,
  },
  {
    path: "/resetPassword",
    element: <><ResetApp/></>,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];
