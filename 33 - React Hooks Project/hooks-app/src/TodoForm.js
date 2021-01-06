import React from 'react';
// Helpers
import useInputState from './hooks/useInputState';
// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem"
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  )
}