export default (state = {text: '', startDate: 0, endDate: 1000, sortBy: 'date'}, action) => {
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