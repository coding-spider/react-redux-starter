import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import {
    createStore
} from 'redux';

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

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return Object.assign({}, state, {
                recipes: state.recipes.concat({
                    name: action.name
                })
            });

        case 'ADD_INGREDIENT':
            return Object.assign({}, state, {
                ingredients: state.ingredients.concat({
                    recipe: action.recipe,
                    name: action.name,
                    quantity: action.quantity
                })
            });
    }

    return state;
};

const store = createStore(reducer, initialState);

window.store = store;

store.subscribe(() => console.log("Store changed"));

// store.dispatch({
//     type: 'ADD_RECIPE',
//     name: "Pancake"
// });

const addIngredient = (recipe, name, quantity) => ({
    type: 'ADD_INGREDIENT',
    recipe,
    name,
    quantity
})

store.dispatch(addIngredient('Omlete', 'Eggs', 4));

console.log("MOdified state >>>", store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 1000);

console.log("Redux started");
