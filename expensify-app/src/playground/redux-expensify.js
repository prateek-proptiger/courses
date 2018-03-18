import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action Generators
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        note,
        amount,
        createdAt,
        description
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'date'
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

// Reducers
const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => {
                return id != action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                return expense.id == action.id ? {...expense, ...action.updates} : expense;
            })
        default:
            return state;
    }
}

const filtersReducer = (state = {text: '', startDate: 0, endDate: 1000, sortBy: 'date'}, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text};
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.sortBy};
        case 'SET_START_DATE':
            return { ...state, startDate: action.date};
        case 'SET_END_DATE':
            return { ...state, endDate: action.date};
        default:
            return state;
    }
}

// Combine Reducers
const reducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const createdAt = expense.createdAt;
        const startDateMatch = typeof startDate != 'number' || createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || createdAt <= endDate;
        const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Store
const store = createStore(reducer);

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

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(250));