import React from "react";
import Todo from "./Todo";

const ToDoList = ({todo}) => {
  return (
    <div className="todo-container">
        <div className='select'>
                <select name="todos" className='form-control'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
        </div>
        <div className="table">
          <th>
            <td>Task Name</td>
            <td>Date</td>
            <td>Description</td>
            <td>Priority</td>
            <td>Email</td>
            <td>Actions</td>
          </th>
          <tr>
          {
            todo.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))
          }
          </tr>
        </div>
    </div>
  );
}

export default ToDoList;