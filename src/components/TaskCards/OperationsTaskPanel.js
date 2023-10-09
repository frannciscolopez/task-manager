import React from 'react';

const NEW_TASK_CARD = 'newTask';
const SHOW_TASKS_CARD = 'showTasks';
const UPDATE_TASK_CARD = 'updateTask';
const REMOVE_TASK_CARD = 'removeTask';

//main panel with the different operations of the tasks
const OptionsTaskPanel = ({ changeCard }) => {
  return (
    <div className="card">
      <h2>Task Manager</h2>
      <div className="button-container">
        <button className="button" onClick={() => changeCard(NEW_TASK_CARD)} >
          New Task
        </button>
        <button className="button" onClick={() => changeCard(SHOW_TASKS_CARD)} >
          Show Tasks
        </button>
        <button className="button" onClick={() => changeCard(UPDATE_TASK_CARD)} >
          Update Task
        </button>
        <button className="button" onClick={() => changeCard(REMOVE_TASK_CARD)} >
          Remove Task
        </button>
      </div>
    </div>
  );
};

export default OptionsTaskPanel;
