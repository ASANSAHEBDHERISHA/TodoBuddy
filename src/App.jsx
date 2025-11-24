import { useState, useEffect } from 'react';
import Taskform from './Taskform';
import TaskList from './Tasklist';
import Progresstracker from './Progresstracker';
import './Style.css';

export default function App() {

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask, index) => {
    const list = [...tasks];
    list[index] = updatedTask;
    setTasks(list);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => setTasks([]);

  return (
    <div className="App">
      <header>
        <h1>TaskMan</h1>
        <p><i>Your friendly Task Manager</i></p>
      </header>

      <Taskform addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
