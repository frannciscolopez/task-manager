import React, { useState } from 'react';
import './Form.css';

const UpdateTask = ({ onUpdateTask, onBackToOptionsPanel }) => {
  const [taskId, setTaskId] = useState('');
  const [fieldToUpdate, setFieldToUpdate] = useState('');
  const [newValue, setNewValue] = useState('');

  //when value from input changes is saved the field
  const handleTaskIdChange = (e) => {
    setTaskId(e.target.value);
  };

  const handleFieldChange = (e) => {
    setFieldToUpdate(e.target.value);
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onUpdateTask(taskId, fieldToUpdate, newValue);
    onBackToOptionsPanel();
  };

  //build form to update task
  return (
    <div className="card">
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task ID:</label>
          <input
            type="text"
            name="taskId"
            value={taskId}
            onChange={handleTaskIdChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Field to Update:</label>
          <select
            name="fieldToUpdate"
            value={fieldToUpdate}
            onChange={handleFieldChange}
            required
          >
            <option value="">Select Field</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="dueDate">Due Date</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div className="form-group">
          <label>New Value:</label>
          <input
            type="text"
            name="newValue"
            value={newValue}
            onChange={handleValueChange}
            required
          />
        </div>
        <button className="button" type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
