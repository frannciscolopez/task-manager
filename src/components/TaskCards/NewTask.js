import React, { useState } from 'react';

const NewTask = ({ onAddTask, onBackToOptionsPanel }) => {

//store the values of the new Task created
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

//Capture input changes from the form. Allow the form to be interactive.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

//when the form is submitted create a new task
  const handleSubmit = () => {
    onAddTask(newTask);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      status: 'Pending',
    });
    onBackToOptionsPanel();
  };

  return (
    <div className="card">
      <h2>New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button className="button" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
