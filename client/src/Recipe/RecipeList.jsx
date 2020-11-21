import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
// import dosa from '../testRecipe'


function RecipeList(props) {

  // const recipeCart = Array(22).fill(dosa);
  const [recipeCart, setRecipeInfo] = useState([]);

  const container = {
    width: "min-content",
    display: "grid",
    gridTemplateColumns : "repeat(4, 250px)",
    justifyContent: "space-around",
    border: "1px solid black",
    padding: "3%",
    margin: "2% auto"
  }

  useEffect(() => {

    if(props.id) {

      fetch(`http://localhost:9000/user=${props.id}/created`)
          .then(response => response.json())
          .then(data => {console.log("returned", data); setRecipeInfo(data)})
          .catch(err => console.error(err));
    }

  }, [props.id]);


  return (
    <div style = {container}>
      {
        recipeCart.map((recipe, number) => (
          <RecipeCard info = {recipe} key = {number} />
        ))
      }
    </div>
  );
}

export default RecipeList;