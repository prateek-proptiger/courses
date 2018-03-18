import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const expenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(expenses);
})

const expenseOne = store.dispatch(addExpense({amount: 10000, createdAt: 10, description: 'January Rent', note: ''}));
const expenseTwo = store.dispatch(addExpense({amount: 200, createdAt: 80, description: 'Coffee', note: 'Friends outing'}));
const expenseThree = store.dispatch(addExpense({amount: 13000, createdAt: 200, description: 'February Rent', note: ''}));
const expenseFour = store.dispatch(addExpense({amount: 11500, createdAt: 330, description: 'March Rent', note: ''}));

store.dispatch(removeExpense({id: expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 150}));

store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(250));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));