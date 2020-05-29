import React, { useState } from 'react';
// import FeedbackDiv from '../components/feedback'
// import dosa from '../testRecipe'
import Form from '../components/form';

function RecipeCreator() {

  const [ping, setPing] = useState(false);


  const callbackFunction = (data) => {
    // console.log("bye");
    console.log(data);
    setPing(false);

  }

  const handleData = () => {
    // console.log("hello")
    setPing(true);
  }


  return (
    <div>
      <label>Name of Dish</label>
      <input type="text" id="name"/>
      <label>Chef</label>
      <input type="text" id="author"/>
      <label>Date</label>
      <input type="date" id="date"/>

      <div>
        <h3>Description</h3>
        <textarea name="description" cols="30" rows="3" placeholder="Any Description"></textarea>
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
        <textarea name="tips" cols="30" rows="10" placeholder="Any Tips"></textarea>
      </div>

      <button onClick = {(e) => {handleData()}}>Display Tags</button>

    </div>
  );
}

export default RecipeCreator;