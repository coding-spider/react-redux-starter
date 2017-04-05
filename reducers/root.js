import {combineReducers} from 'redux';

const recipesReducer = (recipes = [], action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return recipes.concat({name: action.name});
    }
    return recipes;
}

const ingredientsReducer = (ingredients = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return ingredients.concat({recipe: action.recipe, name: action.name, quantity: action.quantity})
    }
    return ingredients;
}

export default combineReducers({recipes: recipesReducer, ingredients: ingredientsReducer});
