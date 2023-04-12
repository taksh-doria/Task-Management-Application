import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api_url from "../constants";

const Todo = ({ todo, onTaskDelete, onTaskComplete }) => {
  const onComplete = () => {
    const data = {
      action: "complete",
      id: todo.id,
      date: todo.date,
    };

    console.log(JSON.stringify(data));
    fetch(api_url + "/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        onTaskComplete(todo.id);
        toast.success("Task Completed Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = () => {
    const data = {
      action: "delete",
      id: todo.id,
      date: todo.date,
    };
    fetch(api_url + "/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        onTaskDelete(todo.id);
        toast.success("Task Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td className="col"> {todo.taskname}</td>
      <td className="col"> {todo.date}</td>
      <td className="col text-overflow-clip"> {todo.description}</td>
      <td className="col"> {todo.priority}</td>
      <td className="col text-overflow-clip"> {todo.email}</td>
      <td className="col">
        {todo.task_status === "created" ? (
          <button className="btn btn-success" onClick={onComplete}>
            Complete
          </button>
        ) : (
          <button className="btn btn-success" disabled>
            Completed
          </button>
        )}
        <button className="btn btn-danger" onClick={onDelete}>
          x
        </button>
      </td>
    </tr>
  );
};

export default Todo;
