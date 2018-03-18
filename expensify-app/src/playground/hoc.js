// A component that renders another component
// - Reuse code, render hijacking, prop manipulation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <h1>Private info</h1>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} />, document.getElementById('app'));