import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, createdAt, amount, description, note, removeExpense}) => (
    <div>
        <div>{description}</div>
        <div>{createdAt}</div>
        <div>{amount}</div>
        <div>{note}</div>
        <button onClick={ () => {
            removeExpense({id}) }
        }>X</button>
    </div>
);

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    removeExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListItem);