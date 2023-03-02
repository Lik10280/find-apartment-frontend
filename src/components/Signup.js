import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";


function Signup() {
const [signUp, setSignUp] = useState({});
const navigate=useNavigate()

function onchange(e){
  const { name, value } = e.target;
  setSignUp({
    ...signUp,
    [name]: value
  });

}
function handleSubmit(e){
    e.preventDefault()
    fetch('https://localhost:9292/test', {
      method: 'POST',
      body: JSON.stringify(
        signUp
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.id===undefined){
         return navigate("/")
        }else
       return navigate(`/owner/${parseInt(data.id)}/rentals`)
      
      })
    
    
    }
    
    
      return (
        <div>
       <nav className="cartNav" >
            <div><Link to="/">Home</Link></div>
            <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
        </nav>
    
        <form  className="signupform" style={{paddingTop:"6rem"}} onSubmit={handleSubmit}>
        <label htmlFor="name"   value="name">Name:   </label>
        <input type="text" name="name" onChange={onchange}/><br/><br/>
        <label htmlFor="email" value="email">Email: </label>
        <input type="email" name="email" onChange={onchange}/><br/><br/>
        <label htmlFor="tel" value="tel">Tel: </label>
        <input type="tel" name="tel" onChange={onchange}/><br/><br/>
        <label htmlFor="password" value="password" >Password:</label>
        <input type="password"  name="password" onChange={onchange}/><br/>
        <input type="submit"  style={{marginTop:"2rem",padding:"15px",border:"none",background:"blue"}}   value="SignUp"/>
      </form>
      
      </div>
      )
    }
    
    export default Signup;