// Todo Application

import { useState } from 'react';

const Practice2 = () => {
    const [tasks, setTasks] = useState([]);

    
    const addTask = () => {
        const taskInput = prompt("Enter a Task : ");
        setTasks(prevTasks => [...prevTasks, taskInput]);
    }

    const removeTask = () => {
        const taskInput = prompt("Enter a Task to Remove : ");
        setTasks(prevTasks => prevTasks.filter(task => task != taskInput));
    }

    return(
        <div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ol>
            <button onClick={addTask}>Add Task</button>
            <button onClick={removeTask}>Remove Task</button>
       </div>
    )
}

export default Practice2;