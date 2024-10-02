import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="taskDescription">{props.description}</p> {/* Use description prop */}
        </div>
    );
}

export default Task;
