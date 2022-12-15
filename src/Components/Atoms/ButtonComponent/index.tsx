import React from 'react'
import Button from '@mui/material/Button'

export type ButtonProps={
  name:string,
  color?:"primary"|"secondary"|"success"|"error"|"info",
  disabled?:boolean,
  variant?:"outlined"|"contained"|"text",
  size?:"small"|"medium"|"large",
  sx?:React.CSSProperties,
  onClick?:()=>void
}

const ButtonComponent=(props:ButtonProps)=>{
  return(
      <Button onClick={props.onClick} sx={props.sx} variant={props.variant} color={props.color} disabled={props.disabled} size={props.size} >{props.name}</Button>
  )
}

export default ButtonComponent
