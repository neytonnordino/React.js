import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (taskName) => {
    const newTaskList = task.filter((t) => t !== taskName);
    setTask(newTaskList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {task.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>
            <button onClick={() => deleteTask(item)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
