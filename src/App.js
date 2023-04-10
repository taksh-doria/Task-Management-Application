import logo from './logo.svg';
import Form from './components/form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import getTasks from './functions/getTasks';

function App() {
  
  const [formdata, setFormData] = useState("");
  const [todo, setTodo] = useState([]);



  return (
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Add Task</h5>
          </div>
          <div className='card-body'>
            <Form setFormData={setFormData} formdata={formdata} todo={todo} setTodo={setTodo}/>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Task List</h5>
        </div>
        <div className="card-body">
          <ToDoList todo={todo} setTodo={setTodo}/>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
