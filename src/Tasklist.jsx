export default function TaskList({ tasks, updateTask, deleteTask }) {
  
  const toggleComplete = (index) => {
    const updated = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updated, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          
          <div className="task-details">
            <span>{task.text}</span>
            <span className={`badge ${task.priority}`}>{task.priority}</span>
            <span className="badge category">{task.category}</span>
          </div>

          <div>
            <button
              className="complete-btn"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}
