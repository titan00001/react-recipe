import React, {useState, useEffect} from 'react';
import FeedbackDiv from '../components/feedback'
import { ExpandableDiv } from '../components/container';
import RecipeList from '../Recipe/RecipeList'
// import dosa from '../testRecipe'
// import user from '../userInfo'

import { useParams } from 'react-router-dom';

// {/* userTemplate name, dob, feedback, description, recipe-contribution*/}

function UserTemplate() {

  const { id } = useParams();
  const [user, setUserInfo] = useState({});

  const container = {
    height: "min-content",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "1px 2px",
    margin: "2%"
  }

  useEffect(() => {

    fetch('http://localhost:9000/user/' + id)
    .then(response => response.json())
    .then(data => setUserInfo(data)).catch(err => console.error(err));

  }, [id]);


  // const recipeContributed = Array(5).fill(dosa);

  // const user = props.info;

  return (
      <div style = {container}>
            <h3>{user.name}</h3>
            <p>{user.userName}</p> 
            <img src = {user.images} alt = {user.name} height = "150px" width = "200px"/>
            <div className = "info">
                <div>{user.date}</div>
                <ExpandableDiv className = "" content = {user.description} />
                <FeedbackDiv className = "" content = {"4"} />
            </div> 
            <h3>created:</h3>
            <RecipeList id = {id}/>
      </div>
  );
}

export default UserTemplate;