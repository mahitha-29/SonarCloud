import React from "react";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import Text from "../../Atoms/Text";
import { Stack } from "@mui/material";

const LoginText = () => {
  return (
    <div>
        <Stack direction="row">
          <Text variant="h1" text="Login to Seeder" />
          <AutoAwesome style={{ color: "gold" }} />
        </Stack>
    </div>
  );
};

export default LoginText;
