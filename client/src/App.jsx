import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {useDispatch} from 'react-redux'

import Header from './components/header';
import Footer from './components/footer';
// import Main from './components/playboard';
import {Logout, Login} from './components/login';

import RecipeCreator from './Recipe/RecipeCreator';
import RecipeTemplate from './Recipe/RecipeTemplate';
import RecipeFeed from './Recipe/RecipeFeed';
import RecipeCart from './Recipe/RecipeCart';

import UserTemplate from './user/userTemplate';
import ProfileTemplate from './user/userCreator';

// Don't run until login and register handler becomes functional
function App() {

  const [isLoggedIn, setLoginStatus] = useState(false);
  const [userId, setId] = useState("0");

  const dispatch = useDispatch();


  const getLoginInfo = (data, id) => {
    setId(id);
    setLoginStatus(data);
  }

  const getLogoutInfo = (data) => {
  
    setId(0);
    setLoginStatus(!data);

  }

  // Runs when user is logged in / has valid userId
  useEffect(() => {

    if(isLoggedIn) {

      fetch('http://localhost:9000/user/' + userId).then(response => response.json())

        .then((user) => {console.log("got user"); dispatch({type: "Get", payload: user}); return user._id;})

        .then((id) => {return fetch(`http://localhost:9000/user=${id}/created`)}).then(response => response.json())

        .then(recipe => {dispatch({type: "INIT", payload: recipe})})

        .catch(err => console.error(err));

        
    }
    
  }, [isLoggedIn]);



  return (
    <Router>
      <Header login = {isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <RecipeFeed />
        </Route>
        <Route path="/about">
          {(!isLoggedIn) && <Redirect from='/about' to='/login'/>}
          <ProfileTemplate />
        </Route>
        <Route path="/create">
          {(!isLoggedIn) && <Redirect from='/create' to='/login'/>}
          <RecipeCreator />
        </Route>
        <Route path="/cart">
          {(!isLoggedIn) && <Redirect from='/cart' to='/login'/>}
          <RecipeCart />
        </Route>
        <Route path="/view/:id">
          <RecipeTemplate />
        </Route>
        <Route path="/chef/:id">
          <UserTemplate />
        </Route>
        <Route path="/logout">
          <Logout getStatus = {getLogoutInfo} />
        </Route>
        <Route path="/login">
          {isLoggedIn && <Redirect from='/login' to='/'/>}
          <Login getStatus = {getLoginInfo} status = {isLoggedIn}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
