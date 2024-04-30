import { Link } from 'react-router-dom'
import style from '../../assets/css/admin/todo.module.css'

const Todo = ({todos}) => {
    return (
        <div>
            <Link to={`${todos.id}`} className={style.todoList}>{todos && <div>{todos.id}-{todos.title}</div>}</Link>
        </div>
    )
}
export default Todo