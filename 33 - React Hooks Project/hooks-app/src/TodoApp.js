import React from 'react';
// My Hooks
import useTodoState from './hooks/useTodoState';
// My Components
import TodoList from './TodoList';
import TodoForm from './TodoForm';
// Material UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { addTodo, editTodo, removeTodo, toggleTodo, todos } = useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar
        color="primary"
        position="static"
        style={{
          height: "64px"
        }}
      >
        <ToolBar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </ToolBar>
      </AppBar>
      <Grid
        container
        justify="center"
        style={{
          marginTop: "1rem"
        }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            editTodo={editTodo}
            removeTodo={removeTodo} 
            todos={todos}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};