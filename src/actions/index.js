export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
// Set action
// Recive the JSON object and set the type
export function setRecipesAction(items) {
  return{
    type: SET_RECIPES,
    items
  }
}

export function favoriteRecipe(recipe) {
  return{
    type: FAVORITE_RECIPE,
    recipe
  }
}
