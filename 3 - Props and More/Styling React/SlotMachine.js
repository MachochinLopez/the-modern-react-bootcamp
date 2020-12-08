class SlotMachine extends React.Component {
    render () {
        const { s1, s2, s3 } = this.props;
        const areEqual = (s1 === s2 && s1 === s3);
        const colors = { fontSize: '50px', backgroundColor: 'purple' };

        return (
            <div className="Machine">
                <p style={ colors }>{ s1 } { s2 } { s3 }</p>
                <p className={ areEqual ? 'winner' : 'loser' }>{ areEqual ? 'You win!!' : 'You Lose!!' }</p>
            </div>
        );
    };
}