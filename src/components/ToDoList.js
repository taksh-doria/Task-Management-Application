import { React, useEffect, useState } from "react";
import Todo from "./Todo";
import getTasks from "../functions/getTasks";

const ToDoList = ({ todo, setTodo }) => {
  const [filtredTasks, setFiltredTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then((data) => {
        console.log(data.body);
        setTodo(data.body);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const onDelete = (id) => {
    setTodo(
      todo.filter((e) => {
        return e.id !== id;
      })
    );
  };

  const onCompleted = (id) => {
    setTodo(
      todo.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            task_status: "complete",
          };
        }
        return e;
      })
    );
  };

  const filterHandler = (e) => {
    console.log("inside handler");
    if (e.target.value === "all") {
      setFiltredTasks([...todo]);
      return;
    } else if (e.target.value === "completed") {
      setFiltredTasks(
        todo.filter((todo) => {
          return todo.task_status === "complete";
        })
      );
      return;
    } else if (e.target.value === "uncompleted")  {
      setFiltredTasks(
        todo.filter((todo) => {
          return todo.task_status === "created";
        })
      );
      return;
    }
  };

  console.log(filtredTasks);

  return (
    <div className="todo-container">
      <div className="select" onChange={filterHandler}>
        <select defaultChecked="all" name="todos" className="form-control">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            (filtredTasks.length === 0) ?  todo.map((todo)=>( <Todo todo={todo} onTaskDelete={onDelete} onTaskComplete={onCompleted} key={todo.id} /> )) :filtredTasks.map((todo) => (
              <Todo todo={todo} onTaskDelete={onDelete} onTaskComplete={onCompleted} key={todo.id} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
