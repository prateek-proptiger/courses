class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            step: 1,
            count: 0
        }
    }

    add() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    subtract() {
        const { step, count } = this.state;
        this.setState({
            count: count - step
        });
    }

    reset() {
        this.setState({
            count: 0
        });
    }

    render() {
        const { step, count } = this.state;
        return (
            <div>
                <h1>Count: {count} </h1>
                <button onClick={this.add}>+{step}</button>
                <button onClick={this.subtract}>-{step}</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/* setState is asynchronous and batches all state update operations */