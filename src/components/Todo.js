import React from "react";


const Todo = ({ todo}) => {
    return (
        <td className="row">
        <td className="col"> {todo.taskname}</td>
        <td className="col"> {todo.date}</td>
        <td className="col"> {todo.description}</td>
        <td className="col"> {todo.priority}</td>
        <td className="col"> {todo.email}</td>
        <td className="col">
            <button className="btn btn-success">Complete</button>
            <button className="btn btn-danger">x</button>
        </td>
        </td>
    );
}

export default Todo;