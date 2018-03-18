import React from 'react';

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
            <form className="add-option" onSubmit={this.submitForm}>
                <input className="add-option__input" type="text" name="option" />
                <button className="button">Add option</button>
            </form>
        )
    }
}

export default AddOption;