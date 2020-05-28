import React from 'react';
import FeedbackDiv from '../components/feedback'
import { UnorderedDiv } from '../components/container';

function RecipeCard(props) {

  const container = {
    height: "min-content",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "1px 2px",
    margin: "2%",
  }

  const dish = props.info;

  return (
      <div style = {container}>
            <h3>{dish.name}</h3>
            <img src = {dish.images["head-image"]} alt = {dish.name} height = "150px"/>
            <div className = "info">
                <div>{dish.author}</div>
                <div>{dish.date}</div>
                <FeedbackDiv className = "" content = {dish.feedback} />
                <UnorderedDiv className = "" content = {dish.tags} />
            </div>

      </div>
  );
}

export default RecipeCard;