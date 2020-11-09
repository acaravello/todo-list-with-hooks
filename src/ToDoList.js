import React from "react";
import "./ToDoList.css";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ToDo from "./ToDo";


function ToDoList(props) {
    if(props.todos.length > 0) {
        return(
            <Paper>
                <List>
                {props.todos.map((todo, index) => (
                        <div key={todo.id}>
                        <ToDo task={todo.task} id={todo.id} completed={todo.completed}  deletingItem={props.deleteToDo} togglingToDo={props.toggleToDo} editToDo={props.editToDo}/>
                        {(index < props.todos.length -1 ? <Divider /> : null)}
                        </div>
                ))}
                </List>
            </Paper>
        )
    };
    return null;
}

export default ToDoList;