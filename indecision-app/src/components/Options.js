import React from 'react';
import Option from './Option';

const Options = (props) => {
    const { hasOptions, options, removeOptions, deleteOption } = props;
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" disabled={!hasOptions} onClick={removeOptions}>Remove all</button>
            </div>
            {
                !options.length &&
                <p className="widget-message">Please add an option to get started!</p>
            }
            <div>
                {
                    options.map((option, index) => {
                        return (
                            <Option index={index+1} key={option} option={option} deleteOption={deleteOption} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Options;