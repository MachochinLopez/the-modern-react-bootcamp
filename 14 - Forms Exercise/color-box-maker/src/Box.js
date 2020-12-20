import { Component } from 'react';

class Box extends Component {
    static defaultProps = {
        width: 100,
        height: 100,
        backgroundColor: '#000'
    }
    render() {
        const { width, height, backgroundColor } = this.props;
        return (
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor}}></div>
        );
    }
}

export default Box;