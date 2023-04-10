import React from "react";
import api from "../functions/calllamda";
import getTasks from "../functions/getTasks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ setFormData, formdata, todo, setTodo }) => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const taskName = e.target[0].value;
    const date = e.target[1].value;
    const description = e.target[2].value;
    const priority = e.target[3].value;
    const email = e.target[4].value;
    setFormData({
      taskname: taskName,
      date: date,
      description: description,
      priority: priority,
      email: email,
      status:'created'
    });

    api({
        taskname: taskName,
        date: date,
        description: description,
        priority: priority,
        email: email,
        status:'created'
      })
      .then((data) => {
        toast.success("Task Added Successfully");
        // getTasks().then((data)=>{
        //     console.log(data);
        //     //setTodo(data);
        // }
        // ).catch((err)=>{
        //     console.log(err);
        // })
      })
      .catch((err) => {
        console.log(err);
      });

    setTodo([
      ...todo,
      {
        taskname: taskName,
        date: date,
        description: description,
        priority: priority,
        email: email,
      },
    ]);

    //
  };

  return (
    <>
      <div className="container p-3 m-2">
        <form className="" onSubmit={formHandler}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Task Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="date" placeholder="Date" className="form-control" />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Description"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <select name="priority" className="form-control">
              <option value="none">None</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Id"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
      />
    </>
  );
};

export default Form;
