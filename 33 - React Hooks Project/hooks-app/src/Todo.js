import React, { memo, useContext } from 'react';
// Context
import { DispatchContext } from './contexts/todos.context';
// My Components
import EditTodoForm from './EditTodoForm';
// My Hooks
import useToggleState from './hooks/useToggleState';
// Material UI
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from '@material-ui/core/ListItemText';

function Todo({ completed, id, isLast, task }) {

  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleDelete = () => {
    dispatch({ type: "REMOVE", id });
  };

  const handleToggle = () => {
    dispatch({ type: "TOGGLE", id });
  };

  return (
    <ListItem divider={isLast} style={{height: "64px"}}>
      {
        isEditing 
        ? <EditTodoForm
            id={id}
            task={task}
            toggleIsEditing={toggleIsEditing}
          />
        : <>
            <CheckBox
              checked={completed}
              onClick={handleToggle}
              tabIndex={-1}
            />
            <ListItemText 
              style={{
                textDecoration: completed ? "line-through" : "none"
              }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="Delete" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  );
};

export default memo(Todo);