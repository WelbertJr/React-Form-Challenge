import Form from "../../components/Form"
import Displayed from "../../components/Displayed"
import Title from "../../components/Title"
import Input from "../../components/Inputs"


function Home() {

  return (
    <Form>
    <Displayed src={"/src/img/Data1.png"}/>
    <Title>Intern Sign Up</Title>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    </Form>
  )
}

export default Home
