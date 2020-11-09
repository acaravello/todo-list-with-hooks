import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import "./EditToDoForm.css";

function EditToDoForm(props) {
    const {task, editToDo, id, editSubmit} = props;
    const [value, handleChange, reset] = useInputState(task);

    const onEditToDo = (e) => {
        e.preventDefault();
        editToDo(id, value);
        reset(); 
        editSubmit();
    }   

    return (
        <form onSubmit={onEditToDo} className="EditToDoForm">
        <TextField value={value} onChange={handleChange} fullWidth autoFocus/>
        </form>
    )
}

export default EditToDoForm;