"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data);
  }

  async function handleAddTask() {
    if (task.trim() === "") return;
    
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: task }),
    });
    
    const data = await response.json();
    setTasks(data.tasks);
    setTask("");
  }

  return (
    <div>
      <h1>My To-Do App</h1>
      <input 
        type="text" 
        placeholder="Enter a task..." 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}