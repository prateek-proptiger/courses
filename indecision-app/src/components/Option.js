import React from 'react';

const Option = (props) => {
    const { index, option, deleteOption } = props;
    return (
        <div className="option">
            <p className="option__text">{index}. {option}</p>
            <button className="button button--link" onClick={() => deleteOption(option)}>Remove</button>
        </div>
    )
}

export default Option;