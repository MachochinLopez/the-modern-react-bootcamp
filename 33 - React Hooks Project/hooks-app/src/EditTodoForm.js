import React from 'react';
// My Hooks
import useInputState from './hooks/useInputState';
// Material UI
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ editTodo, id, task, toggleIsEditing }) {

  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
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