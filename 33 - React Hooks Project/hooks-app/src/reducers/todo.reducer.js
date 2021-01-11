import { v4 as uuid } from 'uuid';

// {type: "ADD", task: "Walk the dog"}
// {type: "EDIT", id: 1234, task: "Walk the dog"}
// {type: "REMOVE", id: 1234}
// {type: "TOGGLE", id: 1234}
// default: return todos

const reducer = (todos, action) => {
  switch(action.type) {
    case "ADD":
      return [...todos, { id: uuid(), task: action.task, completed: false }];
    case "EDIT": 
      return todos.map(todo => {
        return todo.id === action.id ? {...todo, task: action.task} : todo;
      });
    case "REMOVE":
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return todos.map(todo => {
        return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
      });
    default:
      return todos; 
  } 
};

export default reducer;