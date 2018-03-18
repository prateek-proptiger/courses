import React from 'react';

const Action = (props) => {
    const { hasOptions, pickAnOption } = props;
    return (
        <div>
            <button className="big-button" disabled={!hasOptions} onClick={pickAnOption}>What should i do ?</button>
        </div>
    )
}

export default Action;