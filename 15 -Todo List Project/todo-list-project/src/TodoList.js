import { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  editTodo(todoId, newTodo) {
    const newTodoList = this.state.todos.filter(todo => { return todo.id !== todoId });
    this.setState({
      todos: [...newTodoList, newTodo]
    });
  }

  removeTodo(todoId) {
    const newTodoList = this.state.todos.filter(todo => { return todo.id !== todoId });
    this.setState({
      todos: newTodoList
    });
  }

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-title">
          <h1>Todo List!</h1>
          <p>A Simple React Todo List App</p>
        </div>
        <div className="TodoList-todosContainer">
          {
            this.state.todos.map(todo => {
              return (
                <Todo
                  id={todo.id}
                  key={todo.id}
                  description={todo.description}
                  edit={this.editTodo}
                  remove={this.removeTodo}
                /> 
              ) 
            })
          }
        </div>
        <NewTodoForm
          add={this.addTodo}
        />
      </div>
    );
  }
}

export default TodoList;