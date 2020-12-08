class Friend extends React.Component {
    render () {
        const { name, hobbies } = this.props;
        return (
            <div>
                <h1>{ name }</h1>
                <ul>
                    { hobbies.map((hobby, index) => <li key={ index }>{ hobby }</li>) }
                </ul>
            </div>
        )
    }
}