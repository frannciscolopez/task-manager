import React from 'react';
import './Table.css';

//show task from 'tasks' and display it into a table
const ShowTasks = ({ tasks, onBackToOptionsPanel }) => {
  return (
    <div className="card">
      <h2>Show Tasks</h2>
      <table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="button" onClick={onBackToOptionsPanel}>
        Back
      </button>
    </div>
  );
};

export default ShowTasks;




