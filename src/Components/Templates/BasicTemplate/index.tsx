import Box from "@mui/material/Box";
import React, { useState } from "react";
import Login from "../../Organisms/Login";
import MySignUp from "../../Organisms/MySignUp";

const BasicTemplate = () => {
  const [MyState, setmystate] = useState(true);
  if (MyState === true) {
    return (
      <Box
        sx={{
          p: 2,
          border: "1px solid grey",
          width: "400px",
          height: "520px",
          margin:"40px",
          padding:"15px",
        }}
      >
        <Login handle={(val) => setmystate(val)} />
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          p: 2,
          border: "1px solid grey",
          width: "400px",
          height: "500px",
          margin:"40px",
          padding:"15px",
        }}
      >
        <MySignUp handler={(val) => setmystate(val)} />
      </Box>
    );
  }
};

export default BasicTemplate;
