import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      id: uuid(),
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({
      id: '',
      description: ''
    });
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="description">New Todo</label>
        <div className="NewTodoForm-input">
          <input 
            id="description"
            placeholder="New Todo"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;