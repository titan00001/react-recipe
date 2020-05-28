import React from 'react';
import FeedbackDiv from '../components/feedback'
import { ExpandableDiv } from '../components/container';
import RecipeList from '../Recipe/RecipeList'
import dosa from '../testRecipe'
import user from '../userInfo'

// {/* userTemplate name, dob, feedback, description, recipe-contribution*/}

function UserTemplate(props) {

  const container = {
    height: "min-content",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "1px 2px",
    margin: "2%"
  }


  const recipeContributed = Array(5).fill(dosa);

//   const user = props.info;

  return (
      <div style = {container}>
            <h3>{user.name}</h3>
            <p>{user.nickname}</p> 
            <img src = {user.images} alt = {user.name} height = "150px" width = "200px"/>
            <div className = "info">
                <div>{user.date}</div>
                <ExpandableDiv className = "" content = {user.description} />
                <FeedbackDiv className = "" content = {user.feedback} />
            </div>
            <RecipeList recipes = {recipeContributed}/>
      </div>
  );
}

export default UserTemplate;