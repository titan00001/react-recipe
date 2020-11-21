import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import FeedbackDiv from '../components/feedback'
// import dosa from '../testRecipe'
import Form from '../components/form';

function RecipeCreator() {

  let user = useSelector(state => state.userInfoReducer);
  const dispatch = useDispatch();

  const [ping, setPing] = useState(false);
  const [count, setCount] = useState(0);
  const [input, setState] = useState({"name":"", 
  "author": {"name": user.userName, "id": user._id}, 
  "date":"", "description":"", 
  "tips":"",
});


  const callbackFunction = (data) => {

    input[data.name] = data.content;
    setCount(count+1);
    setPing(false);

  }

  const handleClick = () => {
    
    setCount(count+1);
    setPing(true);
  }

  const handleChange = (name, value) => {
    input[name] = value;
  }


  useEffect(() => {

    if(count === 2){
      console.log(input);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      };
      fetch('http://localhost:9000/recipe', requestOptions)
          .then(response => response.json())
          .then(data => {setState(data); 
                          console.log("recipe:", data); 
                          dispatch({type: "ADD", payload: data});
                          setCount(count => count + 1);})
          .catch(err => console.error(err));
      
      }
      
    
  }, [count]);

  useEffect(() => {

    if(input["_id"])
    {
      // change global state
      if(user["recipes"] === undefined) user["recipes"] = {"created" : [], "liked" : []}
      user["recipes"]["created"].push(input["_id"]);
      console.log("userInfo", user);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      };
      fetch('http://localhost:9000/user/' + user._id, requestOptions)
          .then(response => response.json())
          .then(data => {console.log("userUpdate:", data)})
          .catch(err => console.error(err));

      
      dispatch({type: "Get", payload: user});

    }
  },[input]);



  return (
    <div>
      {(input["_id"]) && <div><label>Recipe ID: {input["_id"]}</label></div>}
      <label>Name of Dish</label>
      <input type="text" name="name" onChange={(e) => {handleChange('name', e.target.value)}}/>

      <div>
        <label>Chef : </label><label>{input["author"]["name"]}</label>
        <label>User ID : </label><label>{input["author"]["id"]}</label>
      </div>

      
      <label>Date</label>
      <input type="date" name="date" onChange={(e) => {handleChange("date", e.target.value)}}/>

      <div>
        <h3>Description</h3>
        <textarea name="description" cols="30" rows="3" placeholder="Any Description" onChange={(e) => {handleChange("description", e.target.value)}}></textarea>
      </div>

      <div>
        <label>Tags</label>
        <Form getData = {callbackFunction} listen = {ping} name = 'tags' />
      </div>

      <div>
        <h3>Materials Required</h3>
        <Form getData = {callbackFunction} listen = {ping} name = 'materials'/>
      </div>

      <div>
        <h3>How to Prepare</h3>
        <Form getData = {callbackFunction} listen = {ping} name = 'instructions'/>
      </div>

      <div>
        <h3>Tips</h3>
        <textarea name="tips" cols="30" rows="10" placeholder="Any Tips" onChange={(e) => {handleChange("tips", e.target.value)}}></textarea>
      </div>

      <button onClick = {(e) => {handleClick()}}>Submit</button>

    </div>
  );
}

export default RecipeCreator;