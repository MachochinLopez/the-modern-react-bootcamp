import { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.randomNumber = this.randomNumber.bind(this);
    }
    randomNumber(e) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        this.setState({ num: randomNumber });
    }
    render () {
        let buttonOrText = <button onClick={this.randomNumber}>Random Number</button>;
        if (this.state.num === 7) {
            buttonOrText = <h2>YOU WIN!</h2>;
        } 
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                { buttonOrText }
            </div>
        );
    }
}

export default Clicker;