import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {


  const container = {
    height: "10vh",
    display: "flex",
    backgroundColor: "#262673",
    
    justifyContent: "space-around",
    alignItems: "center",
  }

  const link = {
    color: "#f2f2f2",
    fontSize: "3vh",
    margin: "0 2vh"
  }

  const headLink = {
    color: "#f2f2f2",
    fontSize: "3.4vh"
  }

  return (
    <header style = {container}>

      <Link to = "/" ><span style = {headLink}>Recipe</span></Link>

      <nav style = {{display: "flex"}}>
        <span style = {link}>Search</span>
        <Link to = "/cart" ><span style = {link}>Cart</span></Link>
        <Link to = "/create" ><span style = {link}>Create</span></Link>
        <Link to = "/about" ><span style = {link}>About</span></Link>
        {props.login && <Link to = {(props.login === true) ? "/logout" : "/login"} ><span style = {link}>Logout</span></Link>}
      </nav>
        
    </header>

  );
}

export default Header;
