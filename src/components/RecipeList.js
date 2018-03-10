import React, { Component } from 'react';
import { connect } from "react-redux";
import RecipeItem from './RecipeItem';
import { Link } from "react-router-dom";

class RecipeList extends Component {
  render(){
    // console.log("this.props", this.props);

    return(
      <div>

        {
          this.props.state.length > 0 ?
            <h3> <Link to="/favorites">Favorites</Link> </h3>
          :
          <div> </div>
        }


        {
          this.props.state.map( (recipe, index) => {
            return (
              <RecipeItem
              favoriteButton={true}
              recipe={recipe} key={index}></RecipeItem>
            )
          })
        }
      </div>
    )
  }
}

//// [ THIS REPRESENTS THE STORE]
function stateToProps(state) {
  return {
    state: state.recipesReducer
  }
}

export default connect(stateToProps, null)(RecipeList);


