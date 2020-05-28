import React from 'react';
import {Div, ExpandableDiv, OrderedDiv, MaterialDiv, UnorderedDiv} from '../components/container';
import ImageCollection from '../components/imageContainer';
import FeedbackDiv from '../components/feedback'
import dosa from '../testRecipe'

function RecipeTemplate() {

  return (
    <div>
      <Div className = "" content = {dosa.name} />
      <div>
        <ImageCollection className="" headImage = {dosa.images["head-image"]} otherImage = {dosa.images["other-images"]} />
        <Div className = "" content = {dosa.author} />
        <Div className = "" content = {dosa.date} />
        <ExpandableDiv className = "" content = {dosa.description} />
        <UnorderedDiv className = "" content = {dosa.tags} />
        <FeedbackDiv className = "" content = {dosa.feedback} />
      </div>
      <div>
        <MaterialDiv className = "" heading = "What You Need" content = {dosa.materials} />
        <OrderedDiv className = "" heading = "How to Prepare" content = {dosa.instructions} />
        <ExpandableDiv className = "" heading = "Tips" content = {dosa.tips} />
      </div>
    </div>
    
  );
}

export default RecipeTemplate;