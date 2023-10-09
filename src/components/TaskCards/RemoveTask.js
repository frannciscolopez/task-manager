import React, { useState } from 'react';

const RemoveTask = ({ onDeleteTask, onBackToOptionsPanel }) => {
  const [taskId, setTaskId] = useState('');

  const handleTaskIdChange = (e) => {
    setTaskId(e.target.value);
  };

  //handle submit button that deletes the task
  const handleRemoveTask = () => {
    onDeleteTask(taskId);
  };

  return (
    <div className="card">
      <h2>Remove Task</h2>
      <form>
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
        <button className="button" onClick={handleRemoveTask}>
          Remove Task
        </button>
      </form>
    </div>
  );
};

export default RemoveTask;
