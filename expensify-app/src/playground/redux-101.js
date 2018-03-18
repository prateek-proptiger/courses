import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch(action.type) {
        case 'RESET':
            return { count: 0 };
        case 'INCREMENT':
            return { count: state.count + (action.incrementBy || 1) };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log('Subscribed:', store.getState());
})

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

console.log(store.getState());

unsubscribe();

store.dispatch({
    type: 'RESET'
});

console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());