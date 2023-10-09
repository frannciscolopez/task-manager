
const TASKS = 'tasks';
const CURRENT_ID = 'currentId';

export function initializeTasksAndCurrentId(setTasks, setCurrentId) {
    const storedTasks = JSON.parse(localStorage.getItem(TASKS)) || [];
    const storedCurrentId = JSON.parse(localStorage.getItem(CURRENT_ID)) || 0;
    setTasks(storedTasks);
    setCurrentId(storedCurrentId);
  }
  
  export function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function addTask(
    newTask,
    currentId,
    tasks,
    setTasks,
    setCurrentId
  ) {
    newTask.id = currentId;
    setCurrentId(currentId + 1);
  
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  
    updateLocalStorage(TASKS, updatedTasks);
    updateLocalStorage(CURRENT_ID, currentId + 1);
  }
  
  export function deleteTask(taskId, tasks, setTasks) {
    const updatedTasks = tasks.filter((task) => task.id !== parseInt(taskId));
    setTasks(updatedTasks);
    updateLocalStorage(TASKS, updatedTasks);
  }
  
  export function updateTask(
    taskId,
    fieldToUpdate,
    newValue,
    tasks,
    setTasks
  ) {
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));
  
    if (taskIndex === -1) {
      console.error('Task not found with the provided ID.');
      return;
    }
  
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      [fieldToUpdate]: newValue,
    };
  
    setTasks(updatedTasks);
    updateLocalStorage(TASKS, updatedTasks);
  }
  