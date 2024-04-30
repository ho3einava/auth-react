import {  useState } from "react";
import login from "../assets/css/login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  
  
  const [username, setUserName] = useState(null)
  const [password , setPassword] = useState(null)
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  const userobj = {
    "username" : username ,
    "password" : password ,
    "token" : token
  }
  const navigate = useNavigate()
  function handleSignup() {
    if(!userobj.username || userobj.password === ''){
      Swal.fire({
        title: "ERROR!",
        text: "UserName or Password is Empty!",
        icon: "warning"
      });
      console.log(userobj.username , userobj.password)
    }else{
      localStorage.setItem('userItems' ,JSON.stringify(userobj) )
    Swal.fire({
      title: "Created User!",
      text: "Created User is successfully!",
      icon: "success"
    });
    navigate('/')
    }
    
  }
  
  
        
        

  return (
    <div className={login.main}>
      <div className={login.title}>

      <i className="bi bi-person-check"></i> SignUp
      </div>
      <form className={login.form} onSubmit={handleSignup}>
        <input
          className={login.input}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="UserName"
        />
        <br />
        <input className={login.input} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" />
        <br />
        <button className={login.button} type="submit">
          SignUp
        </button>
      <NavLink to="/" className={login.signup}>Login</NavLink>
      </form>
    </div>
  );
};
export default SignUp;
