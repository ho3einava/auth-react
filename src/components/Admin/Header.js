import {  NavLink,    useNavigate,  } from 'react-router-dom'
import style from '../../assets/css/admin/header.module.css'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
const Header = () => {
    const navigate = useNavigate()
    
    
    const [checkitem , setCheckItem] = useState(false)
    const handleLogout = () => {
        localStorage.clear();
        setCheckItem(true)
        
    } 
    useEffect(() => {
        if(checkitem){
            Swal.fire({
                title: "GoodBye",
                text: "user unkown is Logout",
                icon: "error",
                confirmButtonColor:"error"
              });
           return navigate('/')

        }
        else{
           return navigate("/todos")
            
        }
    },[navigate , checkitem])
    return (
        <div className={style}>
            <div className={style.header}>
                <ul className={style.link}>
                    <NavLink to="/admin" ><i className="bi bi-house"></i>  Dashboard</NavLink>
                    <NavLink to="/todos"  ><i className="bi bi-check2-square"></i>  Todos</NavLink>
                </ul>
                <div className={style.logout}><NavLink onClick={() => handleLogout()}>LogOut <i className="bi bi-box-arrow-in-right"></i></NavLink></div>
            </div>
            
        </div>
    )
}
export default Header