import React, { Component } from 'react';
import RecipeItem from "./RecipeItem";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


class FavoriteRecipeList extends Component {


  render() {

    return (
      <div>
        <h3> <Link to="/">Home</Link> </h3>
        {
          this.props.favoriteRecipesState.map( (recipe, index) => {
            return(

              <RecipeItem favoriteButton={false}
              key={index}  recipe={recipe} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    // This is part of the connector where the reducer is called
    favoriteRecipesState: state.favoriteRecipesReducer
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);

