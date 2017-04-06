import {
    createStore,
    applyMiddleware
} from 'redux';

import reducer from '../reducers/root';
import logMiddleware from '../middlewares/logMiddleware';

const initialState = {
    recipes: [{
        name: "Omlete"
    }],
    ingredients: [{
        recipe: "Omlete",
        name: "Egg",
        quantity: 2
    }]
};

export default createStore(reducer, initialState, applyMiddleware(logMiddleware));
