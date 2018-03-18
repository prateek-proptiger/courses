import filtersReducer from '../../reducers/filtersReducer';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: 0,
        endDate: 1000
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SET_SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducer(undefined, {type: 'SET_SORT_BY', sortBy: 'date'});
    expect(state.sortBy).toBe('date');
});