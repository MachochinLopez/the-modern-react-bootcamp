class SlotMachine extends React.Component {
    render () {
        const { s1, s2, s3 } = this.props;
        const areEqual = (s1 === s2 && s1 === s3);
        return (
            <div>
                <p>{ s1 } { s2 } { s3 }</p>
                <p>{ areEqual ? 'You win!!' : 'You Lose!!' }</p>
            </div>
        );
    };
}