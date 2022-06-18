import Card from "../../components/card/Card"
import {Displayed2, Title2} from "./Sucess.styled"
import Button from "../../components/button/Button"

function Sucess() {
  
    return (
      <Card>
      <Displayed2  src={"/src/img/Data1.png"}/>
      <Title2>Succes!</Title2> 
      <Button name="Go Back!"/>
       </Card>
    )
  }
  
  export default Sucess