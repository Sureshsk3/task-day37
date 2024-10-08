import { Navigate } from "react-router-dom";
import Login from "../components/Login.jsx";
import Signin from "../components/Signin.jsx";
import Forget from "../components/Forget.jsx";
import ResetPassword from "../Components/Resetpassword.jsx";
import OTP from "../Components/OTP.jsx";

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
        <OTP />
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
