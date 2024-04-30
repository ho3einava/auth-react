// import { useEffect} from 'react'
import home from '../../assets/css/admin/Home.module.css'
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const navigate = useNavigate()
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     const token = localStorage.getItem('userItems')
    //      if(token){
    //         setIsLoggedIn(true)
            
    //      }
    //      else{
    //         setIsLoggedIn(false)
            
    //      }

    //    },[])
    return(
        <div className={home.main}>
            {/* {isLoggedIn ? navigate('/admin') : navigate('/login')} */}
            <div className={home.title}>
            <i className="bi bi-house-check me-3"></i>  
                Home Component
            </div>
            <p className={home.paraghraph}>« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »</p>
        </div>
    )
}
export default Home