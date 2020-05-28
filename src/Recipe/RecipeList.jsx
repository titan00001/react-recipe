import React from 'react';
import RecipeCard from '../Recipe/RecipeCard';


function RecipeList(props) {

  // const recipeCart = Array(22).fill(dosa);
  const recipeCart = props.recipes;

  const container = {
    width: "min-content",
    display: "grid",
    gridTemplateColumns : "repeat(4, 250px)",
    justifyContent: "space-around",
    border: "1px solid black",
    padding: "3%",
    margin: "2% auto",
  }

  return (
    <div style = {container}>
      {
        recipeCart.map(recipe => (
          <RecipeCard info = {recipe} />
        ))
      }
    </div>
  );
}

export default RecipeList;