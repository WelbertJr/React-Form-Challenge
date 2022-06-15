import Card from "../../components/Card/Card"
import Displayed from "../../components/Displayed/Displayed"
import Title from "../../components/Title/Title"
import Input from "../../components/Input/Input"
import {Form, DivLine2, LoginGroup} from "./Home.styled"


function Home() {

  return (
    <Card>
    
      <Displayed src={"/src/img/Data1.png"}/>
      <Title>Intern Sign Up</Title>  
      
      <Form>

          <Input type="text" id="Fullname" placeholder="Name" label="Name *"/>
          
          <DivLine2>
            <LoginGroup>
          <Input type="email" id="Email" placeholder="foo@bar.com" label="Email *"/>
            </LoginGroup>   
         
          <Input type="tel" id="Phone" placeholder="(83) 00000-0000" label="Phone"/>
            
            <LoginGroup>
          <Input type="password" id="Password" placeholder="Enter your password" label="Password *"/>
            </LoginGroup>   
          
          <Input type="date" id="Birthday" placeholder="dd/mm/yyyy" label="Birthday *"/>
          </DivLine2>
      
      </Form>

    </Card>
  )
}

export default Home
