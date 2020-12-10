import { Component } from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40   
    };

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.generate = this.generate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(
                num => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
    }
    handleClick() {
        this.generate();
    }
    render() {
        const { title, numBalls, maxNum } = this.props;
        return (
            <section className="Lottery">
                <h1>{title}</h1>
                <div>
                    { this.state.nums.map( num => <LotteryBall num={num} /> ) }
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;