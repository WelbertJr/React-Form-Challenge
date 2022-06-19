import Card from "../../components/card/Card";
import {Form, Displayed, Title, InputInvalid, DivLine2, DivEmail, DivPassword, DivPhone, DivBirthday, DivLine3} from "./Home.styled";
import Checkbox from "../../components/checkbox/Checkbox";
import Button from "../../components/button/Button";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {InputStyled, Label, ContainerInput } from "../../components/input/InputStyled";


function Home() {
const {register, handleSubmit, watch, formState : {errors}} = useForm();
let navigate = useNavigate();

function validation (userData){
  console.log(userData);
  navigate('/sucess');
}

return (
    <Card>
    
      <Displayed src={"/src/img/Data1.png"}/>
      <Title>Intern Sign Up</Title>  
      
      <Form onSubmit={handleSubmit(validation)}>
          

            <ContainerInput>
      <Label htmlFor="Fullname">Full Name *</Label>
      <InputStyled type ="text"  id="Fullname" placeholder="Name" {...register("name", {required: true})}/>
      {errors.name && <InputInvalid>Fullname Invalid</InputInvalid>} 
            </ContainerInput>

      <DivLine2>
            
            <DivEmail> 
          <ContainerInput>
          <Label htmlFor="Email">Email *</Label>
          <InputStyled type="email" id="Email" placeholder="foo@bar.com" {...register("email", {required: true})}/>
          {errors.email && <InputInvalid>Email Invalid</InputInvalid>} 
          </ContainerInput>
            </DivEmail>   
          
            <DivPhone>
          <ContainerInput>
          <Label htmlFor="Phone">Phone</Label>
          <InputStyled type="tel" id="Phone" placeholder="(83) 00000-0000" {...register("phone", {required: true})}/>
          {errors.phone && <InputInvalid>Phone Invalid</InputInvalid>} 
          </ContainerInput>
            </DivPhone>
            
            <DivPassword>
          <ContainerInput>
          <Label htmlFor="Password">Password *</Label>
          <InputStyled type="password" id="Password" placeholder="Enter your password" {...register("password", {required: true})}/> 
          {errors.password && <InputInvalid>Password Invalid</InputInvalid>} 
          </ContainerInput>
            </DivPassword> 
          
            <DivBirthday> 
          <ContainerInput>
          <Label htmlFor="Birthday *">Birthday *</Label>  
          <InputStyled type="date" id="Birthday" placeholder="dd/mm/yyyy" {...register("birthday", {required: true})}/>
          {errors.birthday && <InputInvalid>Birthday Invalid</InputInvalid>} 
          </ContainerInput> 
            </DivBirthday>
          
      </DivLine2>
          
      <DivLine3>
            <Checkbox/>
            <Button name="Register" type="submit"/>
      </DivLine3>

      </Form>

    </Card>
  )
}

export default Home