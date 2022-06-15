import Card from "../../components/Card/Card"
import Displayed from "../../components/Displayed/Displayed"
import Title from "../../components/Title/Title"
import Input from "../../components/Input/Input"
import Form from "./Home.styled"
import { ErrorMessage } from "../../components/Input/InputStyled"

function Home() {

  return (
    <Card>
    
      <Displayed src={"/src/img/Data1.png"}/>
      <Title>Intern Sign Up</Title>  
      
      <Form>
      
          <Input type="text" id="Fullname" placeholder="Name" label="Name *"/>
          
          <Input type="email" id="Email" placeholder="foo@bar.com" label="Email *"/>
             
          <Input type="tel" id="Phone" placeholder="(83) 00000-0000" label="Phone"/>

          <Input type="password" id="Password" placeholder="Enter your password" label="Password *"/>
                  
          <Input type="date" id="Birthday" placeholder="dd/mm/yyyy" label="Birthday *"/>

      
      </Form>

    </Card>
  )
}

export default Home
