import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
// Router
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Components
import App  from "./components/App";
import FavoriteRecipeList from './components/FavoriteRecipeList';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducer';

const store = createStore(rootReducer);

store.subscribe( ()=> console.log("store", store.getState()));



ReactDom.render(



  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/favorites" component={FavoriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>

, document.getElementById('root'));
