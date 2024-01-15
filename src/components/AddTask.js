import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
    dispatch(addTask({ description: newTask, isDone: false }));
    setNewTask("");
    };

    return (
    <div style={{ marginBottom: "10px" }}>
        <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "5px", marginRight: "5px" }}
        />
        <button
        onClick={handleAddTask}
        style={{
            padding: "5px",
            backgroundColor: "lightgreen",
            cursor: "pointer",
        }}
        >
        Add Task
        </button>
    </div>
);
};

export default AddTask;
