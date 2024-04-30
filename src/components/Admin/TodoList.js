
import { useEffect, useState } from "react"
import axios from "axios"
import style from '../../assets/css/admin/todo.module.css'
import Todo from "./Todo"
import Header from "./Header"
import { useNavigate } from "react-router-dom"
const TodoList = () => {

    const [todos , setTodos] = useState(null)
    const [loading , setLoading] = useState(false)
    
    useEffect(() => {
      const FetchData = async() => {
               setLoading(true)
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
              setTodos(response.data)
              setLoading(false)
        }
        FetchData()
        
},[])


const navigate = useNavigate()
useEffect(() => {
    if(localStorage.getItem('userItems') === null){
        return navigate("/")
    }else{
        return navigate("/todos")
    }
},[navigate])


    return(
        
        <div  >
            <Header />
            <div className={style.main} >
           
            
            {loading && <div className="spinner spinner-border"></div>}
             {todos && todos.map(todo => (
                <div key={todo.id}>
                   <Todo  todos = {todo}/>
                    
                    </div>
             ))}

            </div>
            
        </div>
    )
}
export default TodoList