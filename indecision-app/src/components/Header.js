import React from 'react';

// Stateless Functional Component
const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{title}</h1>
                { subTitle && <h2 className="header__subtitle">{subTitle}</h2> }
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of computer !!'
}

export default Header;