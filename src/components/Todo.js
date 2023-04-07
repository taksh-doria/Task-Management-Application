import React from "react";

const Todo = ({ todo}) => {
    return (
        <div className="row">
        <div className="col"> {todo.taskname}</div>
        <div className="col"> {todo.date}</div>
        <div className="col"> {todo.description}</div>
        <div className="col"> {todo.priority}</div>
        <div className="col"> {todo.email}</div>
        <div className="col">
            <button className="btn btn-success">Complete</button>
            <button className="btn btn-danger">x</button>
        </div>
        </div>
    );
}

export default Todo;