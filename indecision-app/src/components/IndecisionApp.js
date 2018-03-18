import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

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
                <div className="container">
                    <Action hasOptions={hasOptions} pickAnOption={this.pickAnOption} />
                    <div className="widget">
                        <Options hasOptions={hasOptions} options={options} removeOptions={this.removeAllOptions} deleteOption={this.deleteOption} />
                        <AddOption addOption={this.addOption} />
                    </div>
                </div>
            </div>
        )
    }
}

export default IndecisionApp;