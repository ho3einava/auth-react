import { Link } from "react-router-dom"
import style from '../assets/css/notfound.module.css'
const NotFound = () => {
    return(
        <div>
            <div className={style.main}>
            <h3>Not Found Page</h3>
            <span>Go To <Link to="/">Home</Link></span>
            </div>
           
        </div>
    )
}
export default NotFound