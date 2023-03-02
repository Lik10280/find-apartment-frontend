
import {Link,useNavigate} from "react-router-dom";



function Login() {

const navigate=useNavigate()
   
function handleUser(e){
  e.preventDefault()
const email=e.target.email.value
fetch(`http://localhost:9292/test/${email}`)
.then(res=>{
 if(!res.ok){
 return navigate("/signup")
 }
 return  res.json()
 })
.then(data=>{
  
  navigate(`/owner/${data.id}/rentals`)})

}


return (
    <>
     <nav className="cartNav">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/signup">Signup</Link></div>
        <p style={{fontStyle:"italic",fontSize:"3rem"}}>Find A Motel</p>
       </nav>
    <div className="login">
    <form  className="form" onSubmit={handleUser}>
       <label htmlFor="email" value="Email">Email:   </label><br/>
       <input type="email" name="email" />
       <input type="submit" className="submit" value="Login"/>
     </form>
  </div>
  </>
  )
}

export default Login;