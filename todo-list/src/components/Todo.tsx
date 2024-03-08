import React, { useState, useEffect } from 'react';
import uuidv4 from 'react-uuid';
export interface Props{
  Header:string
}

export default function Todo(props:Props) {
  const [inputField, setInputField] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadedTasks = loadTasks();
    if (loadedTasks.length > 0) {
      setTasks(loadedTasks);
    }
  }, []);

  type Task = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: uuidv4(),
      title: inputField,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
    setInputField('');
    saveTasks([...tasks, newTask]);
  };

  const handleCheckboxChange = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  function saveTasks(tasksToSave: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  }

  function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("tasks");
    if (taskJSON == null) return [];
    return JSON.parse(taskJSON);
  }

  return (
    <div>
      <h1>{props.Header}</h1>
      <ul id='list'>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              {task.title}
            </label>
          </li>
        ))}
      </ul>
      <form id='new-task-form' onSubmit={handleOnSubmit}>
        <input
          id='new-task'
          type='text'
          value={inputField}
          onChange={(e) => setInputField(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}
