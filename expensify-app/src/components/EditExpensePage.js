import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Edit Expense {props.match.params.id} component
        </div>
    )
}

export default EditExpensePage;