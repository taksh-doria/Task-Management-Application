import {React,useEffect} from "react";
import Todo from "./Todo";
import getTasks from "../functions/getTasks";



const ToDoList = ({todo,setTodo}) => {

  useEffect(() => {
    getTasks()
      .then((data) => {
        console.log(data.body);
        setTodo(data.body);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const filterHandler = (e) => {

    console.log(e.target.value);
    const filtered_items=todo.filter((todo) => {
      return todo.completed === e.target.value;
    }
    )
    setTodo(filtered_items);
  }

  return (
    <div className="todo-container">
        <div className='select' onChange={filterHandler}>
                <select name="todos" className='form-control'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
        </div>
        <table className="table">
          <thead>
          <th>
            <td>Task Name</td>
            <td>Date</td>
            <td>Description</td>
            <td>Priority</td>
            <td>Email</td>
            <td>Actions</td>
          </th>
          </thead>
          <tbody>
          {
            todo.map((todo) => (
              <tr key={todo.id} >
              <Todo todo={todo} />
              </tr>
            ))
          }
          </tbody>
        </table>
    </div>
  );
}

export default ToDoList;