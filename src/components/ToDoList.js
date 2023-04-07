import React from "react";
import Todo from "./Todo";

const ToDoList = ({formdata}) => {
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
          {
            formdata.map((todo) => (
              <Todo todo={todo} />
            ))
          }
        </div>
    </div>
  );
}

export default ToDoList;