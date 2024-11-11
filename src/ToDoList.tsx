import { useState, ChangeEvent } from "react";

const ToDoList = () => {
  const defaultTasks = ["Eat breakfast", "Take a shower", "Walk the dog"];

  const [tasks, setTasks] = useState(defaultTasks);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  return (
    <div className="font-sans flex flex-col items-center gap-3 mt-4">
      <h1 className="text-white text-4xl font-bold">To-Do-List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter the new task..."
          value={newTask}
          onChange={handleInputChange}
          className="px-2 py-1 rounded focus:outline-none"
        />
        <button onClick={addTask} className="bg-green-400 w-16 py-1 rounded">
          Add
        </button>
      </div>

      <ol className="w-80 flex flex-col gap-1">
        {tasks.map((task, index) => (
          <li className="bg-white grid grid-cols-2 place-content-between p-2 rounded">
            <div>
              <span>{task}</span>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => moveTaskUp(index)}
                className="w-8 h-8 bg-sky-400"
              >
                ☝
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="w-8 h-8 bg-sky-400"
              >
                👇
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 w-8 h-8"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
