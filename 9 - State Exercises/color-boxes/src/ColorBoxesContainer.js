import { Component } from 'react';
import ColorBox from './ColorBox';
import { getRandomDifferentColor, getRandomColor } from './helpers';

class ColorBoxesContainer extends Component {
    static defaultProps = {
        colors: [
            '#f0f052', '#049fb2', '#6523f4',
            '#fd6fae', '#cbe008', '#d38b64',
            '#c2f658', '#ae1736', '#5282e1',
            '#66fd0a'
        ]
    }
    constructor(props) {
        super(props);
        this.fillBox = this.fillBox.bind(this);

        const { colors, amount } = this.props;
        const boxes = Array.from({length: amount})
        .map((b, i) => 
            <ColorBox 
                key={i}
                onClick={this.fillBox}
                keyValue={i}
                color={getRandomColor(colors)}
            />
        );

        this.state = {
            boxes 
        };
    }
    fillBox(e) {
        const selectedBox = e.target.getAttribute('key-value');
        const box = this.state.boxes.filter(box => box.key === selectedBox)[0];
        const randomColor = getRandomDifferentColor(box.props.color, this.props.colors);
        const newBox = <ColorBox 
            key={box.key}
            onClick={this.fillBox}
            keyValue={box.key}
            color={randomColor}
        />;

        const boxes = Object.values({ ...this.state.boxes, [box.key]: newBox });
        this.setState({ boxes });
    }
    render() {
        return (
            <div>
                { this.state.boxes }
            </div>
        );
    }
}

export default ColorBoxesContainer;