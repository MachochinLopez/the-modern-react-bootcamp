import { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          boxes: []
      };
      this.addBox = this.addBox.bind(this);
      this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    this.setState({
      boxes: [
        ...this.state.boxes,
        box
      ]
    });
  }

  removeBox(boxId) {
    const boxes = this.state.boxes.filter(stateBox => stateBox.id !== boxId);
    this.setState({ boxes });
  }

  render() {
    return (
      <div>
        <div className="BoxList-boxes">
          {
            this.state.boxes.map(box => {
              const { id, width, height, backgroundColor } = box;
              return (
                <div key={`div-${id}`} >
                  <Box
                    key={id}
                    width={width}
                    height={height}
                    backgroundColor={backgroundColor}
                  />
                  <button key={`button-${id}`} onClick={() => { this.removeBox(id) }}>X</button>
                </div>
              );
            })
          }
        </div>
        <h2>Add a new Box</h2>
        <NewBoxForm addBox={this.addBox} />
      </div>
    );
  }
}

export default BoxList;