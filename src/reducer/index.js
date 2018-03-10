import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from "../actions/index";

// [REDCUCER]
// [ Create an STATE INSTANCE ]
function recipesReducer( state = [], action ){

  switch(action.type){
    case SET_RECIPES:{
      // Form the actions
      return action.items;
    }
    default:{
      return state;
    }
  }
}


// [REDCUCER]
// [ Create an STATE INSTANCE ]
function favoriteRecipesReducer(state = [], action) {

  switch(action.type){
    case FAVORITE_RECIPE:{
      // Form the actions
      state = [...state, action.recipe]
      return state;
    }
    default:{
      return state;
    }
  }
}

const rootReducer = combineReducers({recipesReducer, favoriteRecipesReducer});

export default rootReducer;
