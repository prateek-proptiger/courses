class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.pickAnOption = this.pickAnOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.state = {
            title: 'Indecision App',
            subTitle: 'Put your life in the hands of computer !!',
            options: []
        }
    }

    removeAllOptions() {
        this.setState({
            options: []
        })
    }

    deleteOption(optionToRemove) {
        const { options } = this.state;
        this.setState({
            options: options.filter(option => {
                return optionToRemove !== option;
            })
        })
    }

    pickAnOption() {
        const { options } = this.state;
        const randomIndex = Math.floor(Math.random() * options.length);
        const option = options[randomIndex];
        alert(option);
    }

    addOption(option) {
        const { options } = this.state;
        if (option) {
            this.setState({
                options: options.concat([option])
            })
        }
    }

    render () {
        const { title, subTitle, options } = this.state;
        const hasOptions = !!options.length;
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={hasOptions} pickAnOption={this.pickAnOption} />
                <Options hasOptions={hasOptions} options={options} removeOptions={this.removeAllOptions} deleteOption={this.deleteOption} />
                <AddOption addOption={this.addOption} />
            </div>
        )
    }
}

// Stateless Functional Component
const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            { subTitle && <h2>{subTitle}</h2> }
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of computer !!'
}

const Action = (props) => {
    const { hasOptions, pickAnOption } = props;
    return (
        <div>
            <button disabled={!hasOptions} onClick={pickAnOption}>What should i do ?</button>
        </div>
    )
}

const Options = (props) => {
    const { hasOptions, options, removeOptions, deleteOption } = props;
    return (
        <div>
            <button disabled={!hasOptions} onClick={removeOptions}>Remove all</button>
            <ol>
                {
                    options.map(option => {
                        return (
                            <Option key={option} option={option} deleteOption={deleteOption} />
                        )
                    })
                }
            </ol>
        </div>
    )
}

const Option = (props) => {
    const { option, deleteOption } = props;
    return (
        <li>
            {option}
            <button onClick={() => deleteOption(option)}>Remove</button>
        </li>
    )
}

// Class based Component
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(ev) {        
        ev.preventDefault();
        const { addOption } = this.props;
        const option = ev.target.elements.option;
        const value = option.value;
        if (value) {
            addOption(value);
            option.value = '';
        };
    }

    render () {
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* On the basis of whether the first char is caps it marks it as Component otherwise string */
/* props can't be changed by the component itself */
/* React developer helps in debugging. We can view exact Component structure as well */