import React from "react";
import { Link } from "@mui/material";
import { Stack } from "@mui/system";
import Text from "../../Atoms/Text";
import AutoAwesome from "@mui/icons-material/AutoAwesome";

const SignUpText = () => {
  return (
      <Stack direction="row">
        <Text variant="h1" text="Sign Up" ></Text>
        <AutoAwesome style={{ color: "gold" }} />
      </Stack>
  );
};

export default SignUpText;
