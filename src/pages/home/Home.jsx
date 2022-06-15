import Card from "../../components/Card/Card"
import Displayed from "../../components/Displayed/Displayed"
import Title from "../../components/Title/Title"
import Input from "../../components/Input/Input"
import Form from "./Home.styled"

function Home() {

  return (
    <Card>
    
    <Displayed src={"/src/img/Data1.png"}/>
    <Title>Intern Sign Up</Title>  
    
    <Form>
    
    <div className="DivName">
      <label for ="name">Name *</label>
     <Input type="text" id="name" placeholder="Name"/>
    </div>
  
    <div className="DivEmail">
     <label for="email"> Email *</label>
     <Input type="email" id="email" placeholder="foo@bar.com"/>
    </div>

    <div className="DivPhone">
     <label for="phone">Phone</label>
     <Input type="tel" id="phone" placeholder="(83) 00000-0000"/>
     </div>
    
    <div className="DivPassword">
     <label for="password">Password *</label>
     <Input type="password" id="password" placeholder="Enter your password"/>
    </div>

    <div className="DivBirtday">
      <label for="birthday">Birthday *</label>
      <Input type="date" id="birthday" placeholder="dd/mm/yyyy"/>
    </div>
     
    </Form>

    </Card>
  )
}

export default Home
