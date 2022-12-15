import React from "react";
import SignUp from "../SignUp";
import GoogleIcon from "./../../../assets/google.svg";
import StripeIcon from "./../../../assets/stripe.svg";
import XeroIcon from "./../../../assets/xero.svg";

const UseStyles = {
  ContainerStyle: {
    display: "flex",
    gap: "4px",
  },
};

const SignUpGroup = () => {
  return (
    <div style={UseStyles.ContainerStyle}>
      <SignUp name="Google" src={GoogleIcon}></SignUp>
      <SignUp name="Stripe" src={StripeIcon}></SignUp>
      <SignUp name="Xero" src={XeroIcon}></SignUp>
    </div>
  );
};

export default SignUpGroup;
