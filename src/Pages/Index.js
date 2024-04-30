import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Dashboard from '../components/Admin/Dashboard'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import TodoList from '../components/Admin/TodoList'
import TodoItem from '../components/Admin/TodoItem'
import NotFound from './NotFound';
const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/todos' element={<TodoList />} />
        <Route path='/todos/:id' element={<TodoItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};
export default Index;
