import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipesAction } from "../actions";

class SearchRecipes extends Component {

  constructor(){
    super();

    this.state = {
      ingredients: '',
      dish: ''
    }

  }

  search(){
    // console.log(this.state);
    const { ingredients, dish} = this.state;
    const url =`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    // console.log(this.state, url);

    fetch(url, {
      method: 'GET',
    })
    .then(response => response.json() )
    .then(json => {
      // Trigger the dispatcher
      this.props.setRecipesAction(json.results)
    });

  }

  render() {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>
            {' '}
            <FormControl
            onChange={ event => this.setState( {ingredients: event.target.value } )}
            type="text"
            placeholder="Chicken Adobo" />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Dish</ControlLabel>
            <FormControl
            onChange={ event => this.setState( {dish: event.target.value } )}
            type="text"
            placeholder="Adobo" />
          </FormGroup>
          <FormGroup>
            <Button
            onClick={ event => this.search() }
            >Submit</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
// Connect takes the state and the dispatcher
// Set the dispatcher
// Everytime the dispatcher fires action activates and reduce will take take place
export default connect(null, {setRecipesAction}) (SearchRecipes);

// export default SearchRecipes;
