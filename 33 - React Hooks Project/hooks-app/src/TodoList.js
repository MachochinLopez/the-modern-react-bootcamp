import React, { useContext } from 'react';
// Context
import { TodosContext } from './contexts/todos.context';
// My Components
import Todo from './Todo';
// Material UI
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export default function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length) return (
    <Paper>
      <List>
        {todos.map((todo, index) => {
          const { id } = todo;
          return (
            <Todo
              isLast={index < todos.length - 1}
              key={id}
              {...todo}
            />
          );
        })}
      </List>
    </Paper>
  );

  else return null;
};