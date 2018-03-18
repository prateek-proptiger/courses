import expensesReducer from '../../reducers/expensesReducer';
import { expenses } from '../fixtures/expenses';

test('should setup default values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses]);
});

test('should add an expense', () => {
    const expense = {
        id: 110,
        description: 'laptop',
        note: '',
        createdAt: 20,
        amount: 2500
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 3500;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { amount }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});
