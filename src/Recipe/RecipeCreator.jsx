import React, { useState, useEffect } from 'react';
// import FeedbackDiv from '../components/feedback'
// import dosa from '../testRecipe'
import Form from '../components/form';

function RecipeCreator() {

  const [ping, setPing] = useState(false);
  const [count, setCount] = useState(0);
  const [input, ] = useState({"name":"", "author":"", "date":"", "description":"", "tips":""});


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
    }
  },[count, input])


  return (
    <div>
      <label>Name of Dish</label>
      <input type="text" name="name" onChange={(e) => {handleChange('name', e.target.value)}}/>
      <label>Chef</label>
      <input type="text" name="author" onChange={(e) => {handleChange('author', e.target.value)}}/>
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

      <button onClick = {(e) => {handleClick()}}>Display Tags</button>

    </div>
  );
}

export default RecipeCreator;