import "./ToDo.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import useToggleState from "./hooks/useToggleState";
import EditToDoForm from "./EditToDoForm";

function ToDo(props) {

    const [isEditing, toggle] = useToggleState(false);
    const {task, id, completed, deletingItem, togglingToDo, editToDo} = props;

    const templateList = (
        <>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => togglingToDo(id)} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : "none" }}>
                <div>{task}</div>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => deletingItem(id)}>
                    <DeleteIcon aria-label="Delete" />
                </IconButton>
                <IconButton onClick={toggle}>
                    <EditIcon aria-label="Edit" />
                </IconButton>
            </ListItemSecondaryAction>
        </>
    )

    const templateEditing = (
        <EditToDoForm id={id} task={task} editToDo={editToDo} editSubmit={toggle}/>
    )

    return(
        <ListItem id={id} style={{height: "64px"}}>
            {isEditing ? templateEditing : templateList}
        </ListItem>
    )
}

export default ToDo;