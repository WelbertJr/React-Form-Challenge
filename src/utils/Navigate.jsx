import { useNavigate } from "react-router-dom";

function HomeNav() {
    let navigate = useNavigate();
    return (
        <button  type="submit" onClick={() =>{navigate("/sucess");}}></button>
    )
} 

export default HomeNav