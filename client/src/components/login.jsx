import React, { useState, useEffect } from 'react';


function Login(props) {

  const [input,] = useState( { "name": "", "password" : "", "password2" : ""});
  const [content, setContent] = useState("");
  const [registered, setRegistration] = useState(false);
  const [login, setLogin] = useState(true);

  const container = {
    height: "300px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent : "space-evenly",
    borderLeft: "1px solid black",
    padding: "1px 10%",
    margin: "10% 50%",
  }

  const register = () => {
    setContent("");
    setRegistration(true);
    setLogin(false);
  }

  const sendUserInfo = (loginStatus, id) => {
    console.log(id);
    props.getStatus(loginStatus, id);
  }

  const handleLogin = () => {

    console.log(input);
    if(!input["password"]) setContent("password is required");
    else if(!input["name"]) setContent("user-name is required");
    else {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"userName" : input["name"], "password" : input["password"]})
      }

      fetch('http://localhost:9000/login/', requestOptions).then(res => res.json())
      .then((userId) => { 
        if(userId.userID != 0) 
        {
          console.log(userId.userID);
          setRegistration(true);
          setLogin(true);
          return userId.userID;
        }

        else {
          setContent("Not registered");
          throw "userId not found";
          
        }
      }).then((userId) => sendUserInfo(true, userId))
      .catch(e => { console.error(e)});
    }
    

  }

  const handleRegister = () => {

    if(input["password"] != input["password2"]) setContent("password mismatch. Try Again");
    else if(!input["name"]) setContent("user-name is required");
    else if(!input["password"] || !input["password2"]) setContent("password cannot be left empty");
    else {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"userName" : input["name"], "password" : input["password"]})
      }

      fetch('http://localhost:9000/register/', requestOptions).then(res => res.json())
      .then(userId => { 
        if(userId.userID != 0) 
        {
          console.log(userId.userID);
          setRegistration(true);
          setLogin(true);
          return userId.userID;
          
        } else {
          setContent("Could not register. please try again")
          throw "userId not defined";
        }
      }).then((userId) => sendUserInfo(true, userId))
      .catch(e => { console.error(e)});
    }


  }

  const handleChange = (name, value) => {
    input[name] = value;
  }

  const getBack = () => {
    setRegistration(false);
    setLogin(true);
    setContent("");
  }



  return (
      <div style = {container}>

        <h2>{registered ? "Register" : "Login"}</h2>
        {content && <p>{content}</p>}

        <div>
          <label>User Name:</label>
          <input type="text" onChange = {(e) => {handleChange("name", e.target.value)}}/>
        </div>

        <div>
          <label>Password:</label>
          <input type="text" onChange = {(e) => {handleChange("password", e.target.value)}}/>
        </div>

        {registered && 
          <div>
            <label>Confirm Password:</label>
            <input type="text" onChange = {(e) => {handleChange("password2", e.target.value)}}/>
          </div>
        }

        {!registered && <button onClick = {handleLogin}>Log In</button> }

        {!registered && <button onClick = {register}>New user</button>}

        {registered && <button onClick = {handleRegister}>Register</button>}

        {registered && <button onClick = {getBack}>Go back</button>}

      </div>
  );
}


function Logout(props) {

  const container = {
    height: "200px",
    width: "300px",
    border: "1px solid black",
    padding: "1px 2px",
    margin: "2%",
  }

  const handleClick = () => {
    props.getStatus(true);
  }

  return (
      <div style = {container}>
          <button onClick = {handleClick}>Log Out</button>
      </div>
  )
}



export {Login, Logout};