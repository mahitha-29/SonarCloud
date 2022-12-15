import * as React from "react";
import { Typography } from "@mui/material";

export type  TextProps={
    text:string,
    variant?:'h1'|'h2'|'h3'|'h4'|'subtitle1'|'subtitle2'|'body1'|'body2',
    color?:string
}

const Text=(props:TextProps) =>{
    return (
    
        <Typography {...props}>{props.text}</Typography>      
    
    )
}
export default Text