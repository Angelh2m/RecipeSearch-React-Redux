import React, { Component } from 'react'
import { favoriteRecipe } from "../actions";
import { connect } from 'react-redux';


class RecipeItem extends Component {

  constructor(){
    super();

    this.state ={
      favorited: false
    }

  }

  favorite(recipe){

    this.props.favoriteRecipe(recipe);
    this.setState({favorited: true});

  }


  render() {

    let { recipe }= this.props;

    return (
      <div className="card" >

      {
        this.props.favoriteButton ?

              this.state.favorited ?
                <div> &#9733; </div>
              :
              <div onClick={() => this.favorite(recipe)}>
                <div> &#9734; </div>
              </div>
        :
               <div></div>

      }



        <div className="card_image" >
          <img src={recipe.thumbnail} alt={recipe.title}/>
        </div>
        <div className="card_info" >
          <a href={ recipe.href }>
            <h4>{ recipe.title }</h4>
          </a>
          <p>{ recipe.ingredients }</p>
        </div>
      </div>
    )
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);
