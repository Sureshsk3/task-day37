import { Navigate } from "react-router-dom";
import Login from "../components/Login";
import Signin from "../components/Signin";
import Forget from "../components/Forget";
import ResetPassword from "../Components/Resetpassword";
import OTP from "../Components/OTP";

export default [
  
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Signin />
      </>
    ),
  },
  {
    path: "/forget",
    element: (
      <>
        <Forget />
      </>
    ),
  },
  {
    path: "/otp",
    element: (
      <>
        <OTP/>
      </>
    ),
  },
  {
    path: "/resetPassword",
    element: (
      <>
        <ResetPassword />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];
