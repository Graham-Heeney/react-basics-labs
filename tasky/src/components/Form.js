import React from "react";

const AddTaskForm = (props) => {

    

  return (
    <div>
    <form onSubmit={props.submit}>
    <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>
        <br />
    <label>
        priority:
        <select name="Priority" id="Priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
        onChange={(event) => props.change(event)}
  
</select>    </label>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};


export default AddTaskForm;