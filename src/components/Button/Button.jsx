import React from "react"
import { GroupButton, GroupButton2 } from "./Button.styled"


const Button = (props)=>{
  if (props.name=="Register")
  return(
        <GroupButton>
        <button  type="submit">{props.name}</button>
      </GroupButton>
      )
      else (props.name=="Go Back!")
      return(
      <GroupButton2>
      <button   type="submit">{props.name}</button>
      </GroupButton2>

    )
}

export default Button 