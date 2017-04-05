import {createStore} from 'redux';

import reducer from '../reducers/root';

const initialState = {
    recipes: [
        {
            name: "Omlete"
        }
    ],
    ingredients: [
        {
            recipe: "Omlete",
            name: "Egg",
            quantity: 2
        }
    ]
};

export default createStore(reducer, initialState);
