import React from "react"
import InputStyled from "./InputStyled"
const Input = ({type, id, placeholder})=>{
    return(
       <input type={type} id={id} placeholder={placeholder}/>
    )
}

export default Input