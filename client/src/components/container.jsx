import React from 'react';

// small div container
function Div(props) {

  if(props.content === undefined)
    return <div><h2>Nothing to Show</h2></div>

  return (
  <div className = {props.className}>{props.content}</div>
  );
}

function ExpandableDiv(props){

  if(props.content === undefined)
    return <div><h2>Nothing to Show</h2></div>

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <div>{props.content}</div>
    </div>
  )
    
}

function OrderedDiv(props) {

  if(props.content === undefined)
    return <div><h2>Nothing to Show</h2></div>

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ol>
        {
          props.content.map((step, id) => (
            <li key = {id}>{step}</li>
          )) 
        }
      </ol>
    </div>
  )
}

function UnorderedDiv(props) {

  if(props.content === undefined)
    return <div><h2>Nothing to Show</h2></div>

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ul>
        {
          props.content.map((step, id) => (
            <li key = {id}>{step}</li>
          )) 
        }
      </ul>
    </div>
  )
}

function MaterialDiv(props) {

  if(props.content === undefined)
    return <div><h2>Nothing to Show</h2></div>

  return (
    <div className = {props.className}>
      <h2>{props.heading}</h2>
      <ol>
        {
          props.content.map((step, id) => (
            <li key = {id}>
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