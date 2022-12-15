import * as React from "react";
import MuiTextField from "../../Atoms/Input";
import ButtonComponent from "../../Atoms/ButtonComponent";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import SignUpText from "../../Molecules/SignUpText";

interface SignUpProps {
  handler: (p1: boolean) => void;
}

export default function MySignUp(props: SignUpProps) {
  return (
    <Stack spacing={1} alignItems="center">
      <SignUpText />
      <MuiTextField label="Your Name" type="text" variant="outlined" />
      <MuiTextField label="Email" type="email" variant="outlined" />
      <MuiTextField
        label="Password"
        type="password"
        variant="outlined"
      />
      <br></br>
      <ButtonComponent name="Sign Up" color="primary" variant="contained" />
      <br></br>
      <Button variant="text" onClick={() => props.handler(true)}>
        Sign In
      </Button>
    </Stack>
  );
}
