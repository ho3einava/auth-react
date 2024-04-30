import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "./Header"
import style from '../../assets/css/admin/todo.module.css'

const TodoItem = () => {
    const {id} = useParams()
    const [todos , setTodos] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        const FetchData = async() => {
               const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
               setTodos(response.data)
               
        }
        FetchData()
    },[id])
    useEffect(()=> {
        if(localStorage.getItem("userItems") === null){
          return navigate("/")
        }else{
          return navigate(`/todos/${id}`)
        }
    },[navigate , id])
    return(
      <div >  
          <Header />
          <div className={style.main} >
          {todos && 
            
            <div className={style.todoItem} key={todos.id}>{
          todos.id}- {todos.title}
          <hr  />
          <div className={style.button}>
          <div className={style.label}><label>Todo check : </label> <input type="checkbox" checked={todos.completed} className={style.checkbox}/>  </div> 
           <button className="btn btn-light"> <i className="bi bi-clipboard-check"></i> Edit</button>
           <button className="btn btn-danger"><i className="bi bi-trash"></i>  Delete</button>
          </div>
          
          </div>
          

          }
          </div>
          
        </div>
    )
}
export default TodoItem