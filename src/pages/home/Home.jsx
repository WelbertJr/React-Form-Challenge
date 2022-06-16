import Card from "../../components/Card/Card"
import Displayed from "../../components/Displayed/Displayed"
import Title from "../../components/Title/Title"
import Input from "../../components/Input/Input"
import {Form, DivLine2, DivEmail, DivPassword, DivPhone, DivBirthday, DivLine3} from "./Home.styled"
import Checkbox from "../../components/Checkbox/Checkbox"
import Button from "../../components/Button/Button"

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
            <Button/>
          </DivLine3>
      </Form>

    </Card>
  )
}

export default Home