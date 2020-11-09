import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import "./ToDoForm.css";


function ToDoForm( {addToDo} ) {
    const [value, handleChange, reset] = useInputState("");
    return(
        <Paper style={{margin: '1rem 0', padding: "8px"}}>
            <form onSubmit={e => {
                e.preventDefault();
                addToDo(value);
                reset();
            }} > 
            <TextField value={value} onChange={handleChange} margin="normal" label="Add new Todo"/>
            </form>
        </Paper>
    )
}


export default ToDoForm;