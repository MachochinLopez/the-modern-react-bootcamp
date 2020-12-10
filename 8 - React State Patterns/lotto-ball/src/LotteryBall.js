import { Component } from 'react';
import './LotteryBall.css';

class LotteryBall extends Component {
    render(){
        const { num } = this.props;
        return (
            <div className="LotteryBall">{num}</div>
        );
    }
}

export default LotteryBall;