

import { useEffect, useState } from 'react'
import login from '../assets/css/login.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Login = () => {
    
    const navigate = useNavigate()
    const [userName , setUserName] = useState(null)
    const [password , setPassword] = useState(null)
    
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    const userobj = {
        "username" : userName , 
        "password" : password , 
        "token" : token

    }
   
    useEffect(() => {
        if(!localStorage.getItem('userItem') === null){
            navigate('/signup')
        }else{
              navigate('/')
        }
    },[navigate])
   
   function handleLogin() {
       
              
              if(localStorage.getItem('userItems')){
               let userDetail = JSON.parse(localStorage.getItem(('userItems')))
               


               if(userDetail.username === userobj.username && userDetail.password === userobj.password && userDetail.token === userobj.token){
                Swal.fire({
                    title: "Wellcome",
                    text: "User unknow Wellcome To Admin Page",
                    icon: "success"
                  });
                   return navigate("/todos")
                   
               }
               else{
                console.log("notUser")
                Swal.fire({
                    title: "ERROR",
                    text: "User unknow Wellcome To Admin Page",
                    icon: "success"
                  });
                   
                return navigate("/")
               }


           }
   } 
  

   



    return (
        <div className={login.main}>
           <div className={login.title}><i className="bi bi-box-arrow-in-right"></i> Login</div>
        <form className={login.form} onSubmit={handleLogin}>
        <input className={login.input} onChange={(e) => setUserName(e.target.value)} type='text' placeholder='UserName'/><br/>
        <input className={login.input} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' /><br/>
        <button className={login.button} type='submit' >Login</button>
            <NavLink to="/signup" className={login.signup}>SignUp</NavLink>
        </form>
        </div>
    )
}
export default Login