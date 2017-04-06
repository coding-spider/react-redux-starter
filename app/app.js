import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';

import store from '../store/store';
import {
    addRecipe
} from '../actions/recipes';
import {
    addIngredient
} from '../actions/ingredients';

store.subscribe(() => console.log("Store changed"));

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Omlete', 'Eggs', 4));

window.store = store;

console.log("MOdified state >>>", store.getState());
console.log("Redux started");

// setInterval(() => store.dispatch({ type: 'INC' }), 1000);
