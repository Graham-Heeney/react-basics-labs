import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="taskDescription">{props.description}</p> {/* Use description prop */}
            <p className="priority" style = {{backgroundColor: props.Priority === "High" ? "Red": props.Priority === "Medium" ? "Orange": "Green"}}>  {props.priority} </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            
            


        </div>
    );
}

export default Task;
