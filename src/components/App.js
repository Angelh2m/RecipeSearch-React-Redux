import React, { Component } from 'react';
import SearchRecipes from "./SearchRecipes";
import RecipeList from "./RecipeList";

class App extends Component{

  render(){
    return(
      <div className="container">
        <div className="recipe_container">

        </div>
        <h2>Recipe Finder</h2>

          <div>
           <SearchRecipes/>
          </div>
          <RecipeList />
      </div>

    )
  }
}

export default App;


