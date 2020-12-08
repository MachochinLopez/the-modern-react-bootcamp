class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    };

    render() {
        const { to, from, bangs, img } = this.props;
        let exclams = "!".repeat(bangs);
        return (
            <div>
                <h1>Hi { to } from { from }{ exclams }</h1>
                <img src={ img } />
            </div>
        )
    }
}