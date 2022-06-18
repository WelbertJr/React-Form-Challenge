import React from "react"
import {ContainerInput, InputStyled, Label, ErrorMessage} from "./InputStyled"

const Input = ({type, id, placeholder, label, errorMessage})=>{
    return(
       <ContainerInput>
        <Label htmlnFor={id}>{label}</Label>
        <InputStyled type={type} id={id} placeholder={placeholder}/>
        <ErrorMessage id={errorMessage}>{id} Invalid</ErrorMessage> 
       </ContainerInput>
    )
}

export default Input