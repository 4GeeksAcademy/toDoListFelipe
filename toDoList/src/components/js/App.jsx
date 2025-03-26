import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTasks([...tasks, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-container">
      <input type="text" placeholder="Añadir nueva tarea..." onKeyDown={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
      <p>{tasks.length} tarea{tasks.length !== 1 ? "s" : ""} pendientes</p>
    </div>
  );
};

export default App;
