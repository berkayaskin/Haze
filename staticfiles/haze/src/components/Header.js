import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class Header extends Component {


  render() {


  return(
    <div>

<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header"></div>
      <div className="collapse navbar-collapse" id="bs-nav">
        <a className="navbar-brand" href="/mainpage/">Home</a>
          <ul className="nav navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/profile/">Profile</a></li>
                <li className="nav-item"><a className="nav-link" href="/discover/">Discover</a></li>
                <li className="nav-item"><a className="nav-link" href="/search/">Search</a></li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="/#/">Log out</a></li>
          </ul> 
      </div> 
    </div> 
</nav>
</div>



  )
  }
}
export default Header;


