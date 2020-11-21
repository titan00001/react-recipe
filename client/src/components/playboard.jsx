import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import RecipeCreator from '../Recipe/RecipeCreator';
import RecipeTemplate from '../Recipe/RecipeTemplate';
import RecipeList from '../Recipe/RecipeList';
import UserTemplate from '../user/userTemplate';
import ProfileTemplate from '../user/userCreator';
import Header from '../components/header';
import Login from '../components/login';

function Main(props) {


    return (
      
    <Router>
      <Header login = {props.login} />
      <Switch>
        <Route exact path="/">
          <RecipeList />
        </Route>
        <Route path="/about">
          <ProfileTemplate />
        </Route>
        <Route path="/create">
          <RecipeCreator />
        </Route>
        <Route path="/view">
          <RecipeTemplate />
        </Route>
        <Route path="/chef">
          <UserTemplate />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </Router>
    );
  }



export default Main;