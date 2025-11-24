import React, { useState } from 'react';

export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return; // prevent empty

    addTask({ text: task.trim(), priority, category, completed: false });

    setTask('');
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">

      <div id="inp">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>General</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
      </div>

    </form>
  );
}
