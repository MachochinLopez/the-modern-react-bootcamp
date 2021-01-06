import useLocalStorageState from './useLocalStorageState';
import { v4 as uuid } from 'uuid';

const useTodoState = initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? {...todo, task: newTask} : todo;
    });
    setTodos(updatedTodos);
  };
  
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? {...todo, completed: !todo.completed} : todo;
    });
    setTodos(updatedTodos);
  };
  
  return {
    addTodo,
    editTodo,
    removeTodo,
    toggleTodo,
    todos
  };
};

export default useTodoState;