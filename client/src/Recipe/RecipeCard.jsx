import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackDiv from '../components/feedback'
import { UnorderedDiv } from '../components/container';


const getDate = (date) => {

  // let date = "2015-03-25T12:00:00Z";
  // let today = "2015-03-25T12:00:00Z";

  return date;
}

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
  let image = dish.images === undefined ? "dosa.jfif" : dish.images;
  let author = dish.author === undefined ? {"name" : "Dale", "id": "1234geyx748"} : dish.author;
  let feedback = dish.feedback === undefined ? "4" : dish.feedback;

  return (
      <div style = {container}>
            <Link to = {"/view/" + dish._id}><h3>{dish.name}</h3></Link>
            <img src = {image } alt = {dish.name} height = "150px"/>
            <div className = "info">
                <Link to = {"/chef/" + author.id}><div>{author.name}</div></Link>
                <div>{getDate(dish.date)}</div>
                <FeedbackDiv content = {feedback} />
                <UnorderedDiv content = {dish.tags} />
            </div>

      </div>
  );
}

export default RecipeCard;