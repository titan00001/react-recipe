import React from 'react';

// small div container
function Div(props) {

  return (
  <div className = {props.className}>{props.content}</div>
  );
}

function ExpandableDiv(props){

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <div>{props.content}</div>
    </div>
  )
    
}

function OrderedDiv(props) {

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ol>
        {
          props.content.map(step => (
            <li>{step}</li>
          )) 
        }
      </ol>
    </div>
  )
}

function UnorderedDiv(props) {
  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ul>
        {
          props.content.map(step => (
            <li>{step}</li>
          )) 
        }
      </ul>
    </div>
  )
}

function MaterialDiv(props) {


  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ol>
        {
          props.content.map(step => (
            <li>
              <span>{step.type}</span>
              <span>{step.name}</span>
              <span>{step.quantity}</span>
              <span>{step.unit}</span>
            </li>
          )) 
        }
      </ol>
    </div>
  )

}

export { ExpandableDiv, Div, OrderedDiv, MaterialDiv, UnorderedDiv };