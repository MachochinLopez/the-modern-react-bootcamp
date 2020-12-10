import { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        return (<div
            onClick={this.props.onClick}
            key-value={this.props.keyValue}
            color={this.props.color}
            className="ColorBox"
            style={{backgroundColor: this.props.color}}>    
        </div>);
    }
}

export default ColorBox;