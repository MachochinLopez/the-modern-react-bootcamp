import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewFormBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         width: '',
         height: '',
         backgroundColor: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(evt) {
      this.setState({
         [evt.target.name]: evt.target.value
      });
   }

   handleSubmit(evt) {
      evt.preventDefault();
      this.setState({
         id: uuidv4(),
         width: '',
         height: '',
         backgroundColor: ''
      });
      this.props.addBox(this.state);
   }

   render () {
      return (
         <form onSubmit={this.handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input 
               id="width"
               name="width"
               placeholder="Width"
               value={this.state.width}
               onChange={this.handleChange}
               required
            />
            <label htmlFor="height">Height:</label>
            <input 
               id="height"
               name="height"
               placeholder="Height"
               value={this.state.height}
               onChange={this.handleChange}
               required
            />
            <label htmlFor="backgroundColor">Background Color:</label>
            <input 
               id="backgroundColor"
               name="backgroundColor"
               placeholder="Background Color"
               value={this.state.backgroundColor}
               onChange={this.handleChange}
               required
            />
            <button>Add box</button>
         </form>
      );
   }
}

export default NewFormBox;