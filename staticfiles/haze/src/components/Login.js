import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/Login.css'




var background_style = {
  backgroundImage:  'url(" + https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=750&q=80 + ")'

};

class Login extends Component {

login(e) {

    var scope = 'user-read-private user-read-email playlist-read-private user-library-read user-follow-modify user-modify-playback-state user-follow-read';

    var querystring = require('querystring');


    var client_id = '6b352da8a18849318a10dbe3b35d0b42'; // Your client id
    var client_secret = 'ee13701c42474b8da03f1f385d8e41e5'; // Your secret
    var redirect_uri = 'http://127.0.0.1:8000/mainpage/'; // Your redirect uri

    var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
    };

    var state = generateRandomString(16)

    e.preventDefault();
    console.log('login clicked.');
    window.location.replace('https://accounts.spotify.com/authorize?'+
    querystring.stringify({
      response_type: 'token',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));


  }


  

  render() {

  return(
<div>
<div className="container" style={background_style}>
  <div className="row">
    <div className="col-lg-12">
      <div id="content">
        
        <div className="col-lg-6" id="xxx">
        <h1 id="h1">H A Z E</h1>
        <h3 id="h3">Taste the Music</h3>
        <hr id="hr"/>
        <button id="login_button" type="button"  onClick={this.login}  className="btn btn-success">Login with Spotify</button>
        </div>
       
      </div>    
    </div>
  </div>
</div>
</div>
  );
  }
  }

export default Login;

