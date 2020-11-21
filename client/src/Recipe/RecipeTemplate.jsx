import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Div, ExpandableDiv, OrderedDiv, MaterialDiv, UnorderedDiv} from '../components/container';
import ImageCollection from '../components/imageContainer';
import FeedbackDiv from '../components/feedback'
import dosa from '../testRecipe'

function RecipeTemplate() {

  const { id } = useParams();
  const [dish, setDishInfo] = useState({});


  useEffect(() => {

    fetch('http://localhost:9000/recipe/' + id)
    .then(response => response.json())
    .then(data => setDishInfo(data)).catch(err => console.error(err));

  }, [id]);

  let author = dish.author === undefined ? {"name" : "Dale", "id": "1234geyx748"} : dish.author;


  return (
    <div>
      <Div className = "" content = {dish.name} />
      <div>
        {/* <ImageCollection className="" headImage = {dish.images["head-image"]} otherImage = {dish.images["other-images"]} /> */}
        <Div className = "" content = {author.name} />
        <Div className = "" content = {dish.date} />
        <ExpandableDiv className = "" content = {dish.description} />
        <UnorderedDiv className = "" content = {dish.tags} />
        <FeedbackDiv className = "" content = {"4"} />
      </div>
      <div>
        <OrderedDiv className = "" heading = "What You Need" content = {dish.materials} />
        <OrderedDiv className = "" heading = "How to Prepare" content = {dish.instructions} />
        <ExpandableDiv className = "" heading = "Tips" content = {dish.tips} />
      </div>
    </div>
    
  );
}

export default RecipeTemplate;