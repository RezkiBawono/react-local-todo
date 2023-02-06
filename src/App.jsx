import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // set a default state for add task button
  const [showAddTask, setShowAddTask] = useState(false);

  // use state from JSON

  const [taskList, setTaskList] = useState([
    {
      id: 1,
      text: "eat full meat",
      day: "sunday",
      reminder: true,
    },
    {
      id: 2,
      text: "play more games",
      day: "monday",
      reminder: true,
    },
    {
      id: 3,
      text: "sleep through the night",
      day: "tuesday",
      reminder: false,
    },
  ]);

  // Add id and newtask

  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000) + 1;
    const newTask = { id, ...task };
    setTaskList([...taskList, newTask]);
  };

  // Delete task
  // ??

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // Set a reminder
  // ??

  const toggleReminder = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header title={"React TODO"} onAdd={() => setShowAddTask(!showAddTask)} />
      {/* onAdd to add a todo list when clicked, default is false(hidden) */}

      {showAddTask && <AddTask onAdd={addTask} />}
      {/* showAddTask itenary(if) simplified */}

      {taskList.length > 0 ? (
        <Tasks
          taskList={taskList}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
