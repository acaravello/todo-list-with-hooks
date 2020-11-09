import React, {useState, useEffect} from "react";
import "./ToDoApp.css";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Grid from "@material-ui/core/Grid";
import { v4 as uuid } from 'uuid';


function ToDoApp() {

    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) ||
    [
        {id: uuid(), task: "Clean Fishtank", completed: false},
        {id: uuid(), task: "Wash Car", completed: true},
        {id: uuid(), task: "Grow Beard", completed: false}
    ];

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addToDo = newToDoText => {
        setTodos([...todos, {id: uuid(), task: newToDoText, completed: false}])
    }

    const deleteToDo = todoId => {
        const updatedToDos = todos.filter(el => el.id !== todoId);
        setTodos(updatedToDos)
    }

    const toggleToDo = todoId => {
        const updatedToDos = todos.map(el => el.id === todoId ? {...el, completed: !el.completed}: el);
        setTodos(updatedToDos);
    }

    const editToDo = (todoId, newTask) => {
        const updatedToDos = todos.map(el => el.id === todoId ? {...el, task: newTask}: el);
        setTodos(updatedToDos);
    }
    
    return(
        <div>
            <Paper style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}>
                <AppBar color="primary" position="static" style={{ height: "64px" }}>
                    <Toolbar>
                        <Typography color="inherit">Todos</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center" style={{marginTop: '2rem'}}>
                    <Grid item xs={11} md={8} lg={4}>
                        <ToDoForm addToDo={addToDo} />
                        <ToDoList todos={todos} deleteToDo={deleteToDo} toggleToDo={toggleToDo} editToDo={editToDo}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ToDoApp;