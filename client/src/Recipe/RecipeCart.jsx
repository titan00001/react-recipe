import React, {useEffect} from 'react';
import RecipeCard from '../Recipe/RecipeCard';
// import dosa from '../testRecipe'
// import RecipeList from '../Recipe/RecipeList'
import { useSelector } from 'react-redux';


function RecipeCart() {

  let recipes = useSelector(state => state.CreatedRecipeReducer);
  console.log(typeof(recipes), Object.keys(recipes).length);

  const container = {
    width: "min-content",
    display: "grid",
    gridTemplateColumns : "repeat(4, 250px)",
    justifyContent: "space-around",
    border: "1px solid black",
    padding: "3%",
    margin: "2% auto"
  }


  if(Object.keys(recipes).length === 0 ){

    return (
      <div>
        <h1>No recipes</h1>
      </div>
    );

  }
  
  else {
    return (
      <div>
        <h1>Created</h1>
        <div style = {container}>
        {
          recipes.map((recipe, number) => (
            <RecipeCard info = {recipe} key = {number} />
          ))
        }
        </div>

        {/* <h1>Liked</h1>
        <div style = {container}>
        {
          recipes["liked"] &&
          recipes["liked"].map((recipe, number) => (
            <RecipeCard info = {recipe} key = {number} />
          ))
        }
        </div> */}
      </div>
    );
  }
  }

  

export default RecipeCart;