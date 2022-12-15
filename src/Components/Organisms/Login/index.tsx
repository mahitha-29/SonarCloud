import * as React from "react";
import LoginText from "../../Molecules/LoginText";
import MuiTextField from "../../Atoms/Input";
import { Divider, FormHelperText, Link, Stack } from "@mui/material";
import ButtonComponent from "../../Atoms/ButtonComponent";
import SignUps from "../../Molecules/SignUpGroup";
import Button from "@mui/material/Button";
import Text from "../../Atoms/Text";

interface LoginProps {
  handle: (p1: boolean) => void;
}
export default function Login(props: LoginProps) {
  return (
    <Stack spacing={2} alignItems="center">
      <LoginText />
      <FormHelperText>Enter your Email and Password to login</FormHelperText>
      <MuiTextField label="Email" type="email" variant="outlined" />
      <MuiTextField label="Password" type="password" variant="outlined" />
      <Link>Forgot password?</Link>
      <ButtonComponent size={"large"} name={"Continue"} variant={"contained"} />
      <Divider>Or</Divider>
      <SignUps />
      <Stack direction="row">
        <Text variant="body1" text="Don't have an account?" ></Text>
        <Button
          variant="text"
          color="primary"
          onClick={() => props.handle(false)}
        >
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
}
