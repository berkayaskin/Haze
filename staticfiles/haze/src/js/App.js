import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';


import Login from '../components/Login.js'
import Profile from '../components/Profile.js'
import Search from '../components/Search.js'
import Discover from '../components/Discover.js'
import MainPage from '../components/MainPage.js'
import SharePAge from '../components/SharePAge.js'
import UserProfile from '../components/UserProfile.js'
import Header from '../components/Header.js'


import '../css/App.css';




class App extends Component {
  render() {
    return (
    
     <Router>
        <div>
            <Route exact path="/" component={Login}/>
            <Route path="/mainpage/" component={MainPage}/>
            <Route path="/sharepage/:track_id" component={SharePAge}/>
            <Route path={'/profile/'} component={Profile}/>
            <Route path={'/userprofile/:user_id'} component={UserProfile}/>
            <Route path="/search/" component={Search}/>
            <Route path="/discover/" component={Discover}/>        

        </div>
    </Router>

      
    );

  }


}

export default App;