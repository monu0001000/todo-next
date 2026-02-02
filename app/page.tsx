'use client';

import { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {tasks.map((task, i) => (
          <div key={i}>
            <span>{task}</span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}