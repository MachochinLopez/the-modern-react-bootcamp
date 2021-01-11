import React, { useContext } from 'react';
// Context
import { DispatchContext } from './contexts/todos.context';
// My Hooks
import useInputState from './hooks/useInputState';
// Material UI
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT", id, task: value });
    reset();
    toggleIsEditing();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginLeft: "1rem",
        width: "100%"
      }}
    >
      <TextField
        autoFocus
        fullWidth
        margin="normal"
        onChange={handleChange}
        value={value}
      />
    </form>
  )
};