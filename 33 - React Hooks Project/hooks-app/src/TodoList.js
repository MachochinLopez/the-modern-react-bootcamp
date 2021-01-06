import React from 'react';
// My Components
import Todo from './Todo';
// Material UI
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export default function TodoList({ editTodo, removeTodo, todos, toggleTodo }) {
  if (todos.length) return (
    <Paper>
      <List>
        {todos.map((todo, index) => {
          const { id } = todo;
          return (
            <Todo
              editTodo={editTodo}
              isLast={index < todos.length - 1}
              key={id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              {...todo}
            />
          );
        })}
      </List>
    </Paper>
  );

  else return null;
};