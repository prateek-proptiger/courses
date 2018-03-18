export default (expenses, {text, sortBy, startDate, endDate}) => {
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