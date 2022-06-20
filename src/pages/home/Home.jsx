import Card from "../../components/card/Card"
import Input from "../../components/input/Input"
import {Form, Displayed, Title, DivLine2, DivEmail, DivPassword, DivPhone, DivBirthday, DivLine3} from "./Home.styled"
import Checkbox from "../../components/checkbox/Checkbox"
import Button from "../../components/button/Button"

function Home() {

  return (
    <Card>
    
      <Displayed src={"/src/img/Data1.png"}/>
      <Title>Intern Sign Up</Title>  
      
      <Form>
          
          <Input type="text" id="Fullname" placeholder="Name" label="Full Name *"/>
          
          <DivLine2>
            <DivEmail>
          <Input type="email" id="Email" placeholder="foo@bar.com" label="Email *"/>
            </DivEmail>   
          
          <DivPhone>
          <Input type="tel" id="Phone" placeholder="(83) 00000-0000" label="Phone"/>
          </DivPhone>
            
            <DivPassword>
          <Input type="password" id="Password" placeholder="Enter your password" label="Password *"/> 
            </DivPassword> 
          
          <DivBirthday>   
          <Input type="date" id="Birthday" placeholder="dd/mm/yyyy" label="Birthday *"/>
          </DivBirthday>
          
          </DivLine2>
          
          <DivLine3>
            <Checkbox/>
            <Button name="Register"/>
          </DivLine3>
      </Form>

    </Card>
  )
}

export default Home