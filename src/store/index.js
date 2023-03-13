import {createStore } from 'redux';

const counterReducer = (state = {counter: 0} , action) => {
    if (action.type === 'increment') {
        state.counter = state.counter + 1;
    }
    
    if (action.type === 'decrement') {
        state.counter = state.counter - 1;
    }

    return state;

} 

const store = createStore( counterReducer );

export default store;