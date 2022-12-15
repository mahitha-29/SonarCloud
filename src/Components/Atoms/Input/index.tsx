import { Stack, TextField, InputAdornment } from "@mui/material";
import React from "react";

export type TextFieldProps = {
  label?: string;
  variant?: "outlined" | "standard" | "filled";
  color?: "primary" | "secondary" | "success" | "error" | "info";
  type?:"email"|"password"|"text"|"date";
};

const Input = (props: TextFieldProps) => {
  return (
        <TextField
          label={props.label}
          variant={props.variant}
          color={props.color}
          type={props.type}
        />
  );
};

export default Input;
