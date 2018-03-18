import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.setTextFilter(e.target.value);
        }} />
        <select
        value={props.filters.sortBy}
        onChange={(e) => {
            if (e.target.value == 'date') {
                props.sortByDate();
            } else if (e.target.value == 'amount') {
                props.sortByAmount();
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = {
    setTextFilter,
    sortByAmount,
    sortByDate
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);