import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../redux/actions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.description);
    const dispatch = useDispatch();

    const handleToggleDone = () => {
    dispatch(updateTask({ ...task, isDone: !task.isDone }));
    };

    const handleEditTask = () => {
    dispatch(updateTask({ ...task, description: editedTask }));
    setIsEditing(false);
    };

    const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    };

    return (
    <div style={{ marginBottom: '5px', padding: '10px', border: '1px solid #ccc',  backgroundColor: task.isDone ? 'lightgray' : 'white', borderRadius: '5px' }}>
        <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleDone}
        style={{ marginRight: '5px' }}
        />
        {isEditing ? (
        <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            style={{ marginRight: '5px' }}
        />
        ) : (
        <span style={{ marginRight: '5px' }}>{task.description}</span>
        )}
        <button
        onClick={isEditing ? handleEditTask : () => setIsEditing(true)}
        style={{ marginRight: '5px', backgroundColor: 'lightblue', cursor: 'pointer' }}
        >
        {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
        onClick={handleDeleteTask}
        style={{ backgroundColor: 'lightcoral', cursor: 'pointer' }}
        >
        Delete
        </button>
    </div>
    );
};

export default Task;
