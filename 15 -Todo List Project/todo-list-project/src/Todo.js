import { Component } from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      description: this.props.description,
      isEditing: false
    }
    this.openEditForm = this.openEditForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompletedClick = this.handleCompletedClick.bind(this);
  }

  // Abre el formulario para editar el todo.
  openEditForm() {
    this.setState({
      isEditing: true
    });
  }

  // Actualiza el estado al editar.
  handleChange(evt) {
    this.setState({
      ...this.state,
      description: evt.target.value
    });
  }

  // Al dar submit en el formulario de editar guarda los cambios.
  handleEdit(evt) {
    evt.preventDefault();
    this.props.edit(this.props.id, { id: this.props.id, description: this.state.description });
    this.setState({
      ...this.state,
      isEditing: false
    });
  }

  // Elimina el todo.
  handleDeleteClick() {
    this.props.remove(this.props.id);
  }

  // Marca como completado el todo.
  handleCompletedClick() {
    this.setState({
      ...this.state,
      completed: !this.state.completed
    });
  }

  render() {
    return (
      <div className="Todo">
        {
          this.state.isEditing 
          ? <form className="Todo-editForm" onSubmit={this.handleEdit}>
              <input
                autoFocus
                name="description"
                value={this.state.description} 
                onChange={this.handleChange}
              />
              <button>SAVE</button>
            </form>
          : <div className="Todo-container">
              <div
                onClick={this.handleCompletedClick}
                className={this.state.completed ? "Todo-description Todo-textCompleted" : "Todo-description"}
                >{this.props.description}</div>
              <div className="Todo-actions">
                <button onClick={this.openEditForm}><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button onClick={this.handleDeleteClick}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default Todo;