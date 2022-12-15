import { Typography } from "@mui/material";
import React from "react";
import baseTheme from "../../../Themes";
import Text from "../../Atoms/Text";

export type SignUpProps = {
  src: string;
  name: string;
};
const UseStyles = {
  divStyle: {
    border: "1px solid black",
    width: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgStyle: {
    height: "40px",
    width: "25px",
  },
};
const SignUp = (props: SignUpProps) => {
  return (
    <div style={UseStyles.divStyle as React.CSSProperties}>
      <img style={UseStyles.imgStyle} src={props.src}></img>
      <Text variant="body2" color={baseTheme.palette.grey[100]} text={props.name} />
    </div>
  );
};

export default SignUp;
      {/* <Typography variant="body2" color={baseTheme.palette.primary.main}> */}
