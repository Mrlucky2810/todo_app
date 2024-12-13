import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");//For Input Field

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, { text: newTask, isChecked: false }]);
      setNewTask("");
    } else {
      alert("Enter the task...");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    } else alert("Already at Top.");
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    } else alert("Already at Bottom.");
  }

  function handleCheckBox(index) {
    const updatedTask = [...task];
    updatedTask[index].isChecked = !updatedTask[index].isChecked;
    setTask(updatedTask);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task Here...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((taskkk, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={taskkk.isChecked}
              onChange={() => handleCheckBox(index)}
            />
            <span
              className="text"
              style={{
                textDecoration: taskkk.isChecked ? "line-through" : "none",
              }}
            >
              {taskkk.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;
