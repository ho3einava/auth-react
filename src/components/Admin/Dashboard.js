import Header from './Header'
import Home from './Home'
import '../../assets/css/admin/admin.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
    
    const navigate = useNavigate()
   useEffect(() => {
    
    if(localStorage.getItem('userItems') === null){
        return navigate("/")
    }else{
       return navigate("/todos")
    }
   },[navigate])
       
       
    return (
        <div className= "main">
            
            <Header />
            <Home />
            
            
        </div>
    )
}
export default Dashboard