import React from "react"
import "./Checkbox.styled"
import { GroupCheckbox } from "./Checkbox.styled"

const Checkbox = ()=>{
    return(
    
        <GroupCheckbox>
        <input id="input-checkbox" type="checkbox"/>
        <label id="label-chekbox" for="input-checkbox"><span id="term-accept">I accept the terms and privacy</span></label>
      </GroupCheckbox>
      
    )
}

export default Checkbox
