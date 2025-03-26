import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {tasks.length === 0 ? (
                <li className="no-tasks">No hay tareas, añade una nueva tarea</li>
            ) : (
                tasks.map((task, index) => (
                    <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
                ))
            )}
        </ul>
    );
};

export default TodoList;