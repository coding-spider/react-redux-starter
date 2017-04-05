import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';

import store from '../store/store';
import {addRecipe} from '../actions/recipes';
import {addIngredient} from '../actions/ingredients';

store.subscribe(() => console.log("Store changed"));

window.store = store;

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Omlete', 'Eggs', 4));

console.log("MOdified state >>>", store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 1000);

console.log("Redux started");
