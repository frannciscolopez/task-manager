import React, { useState, useEffect } from 'react';
import './Home.css';

import OptionsPanel from './TaskCards/OperationsTaskPanel';
import NewTask from './TaskCards/NewTask';
import ShowTask from './TaskCards/ShowTask';
import UpdateTask from './TaskCards/UpdateTask';
import RemoveTask from './TaskCards/RemoveTask';

import {
    initializeTasksAndCurrentId,
    addTask,
    deleteTask,
    updateTask,
  } from './TaskCards/taskOperations';

const HOME_CARD = 'home';
const NEW_TASK_CARD = 'newTask';
const SHOW_TASKS_CARD = 'showTasks';
const UPDATE_TASK_CARD = 'updateTask';
const REMOVE_TASK_CARD = 'removeTask';

const Home = () => {

    const [currentCard, setCurrentCard] = useState('home');
    const [tasks, setTasks] = useState(undefined);
    const [currentId, setCurrentId] = useState(0);
  
    useEffect(() => {
      initializeTasksAndCurrentId(setTasks, setCurrentId);
    }, []);
    
    const handleAddTask = (newTask) => {
      addTask(newTask, currentId, tasks, setTasks, setCurrentId);
    };
  
    const handleDeleteTask = (taskId) => {
      deleteTask(taskId, tasks, setTasks);
    };
  
    const handleUpdateTask = (taskId, fieldToUpdate, newValue) => {
      updateTask(taskId, fieldToUpdate, newValue, tasks, setTasks);
    };
  
    const changeCard = (card) => {
      setCurrentCard(card);
    };

  //function to decide which card must be displayed
  const renderCard = () => {
    switch (currentCard) {
      case HOME_CARD:
        return <OptionsPanel
        changeCard={changeCard}/> ;
      case NEW_TASK_CARD:
        return <NewTask onAddTask={handleAddTask} onBackToOptionsPanel={() => changeCard(HOME_CARD)} />;
      case SHOW_TASKS_CARD:
        return <ShowTask tasks={tasks} onBackToOptionsPanel={() => changeCard(HOME_CARD)} />;
      case UPDATE_TASK_CARD:
        return <UpdateTask onUpdateTask={handleUpdateTask} onBackToOptionsPanel={() => changeCard(HOME_CARD)} />;
      case REMOVE_TASK_CARD:
        return <RemoveTask onDeleteTask={handleDeleteTask} onBackToOptionsPanel={() => changeCard(HOME_CARD)} />;
      default:
        return null;
    }
  };

  return <div className="home-container">{renderCard()}</div>;
};

export default Home;
