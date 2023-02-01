import { MdDeleteOutline } from "react-icons/md";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <MdDeleteOutline
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
