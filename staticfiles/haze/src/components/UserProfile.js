import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import AppHeader from '../components/AppHeader.js'

import '../css/Profile.css'

class UserProfile extends Component {


constructor(props) {
    super(props);

    this.state = {
     data:[],
     datax:[]
    };



     this.follow = this.follow.bind(this);
  }

   componentDidMount(){
    var client_id = localStorage.getItem('client_id');
    var client_secret = localStorage.getItem('client_secret');
    var access_token = localStorage.getItem('access_token');
   
     axios
        .get('http://127.0.0.1:8000/haze/restapi/user/'+ this.props.match.params.user_id +"/")
       .then(({ data })=> {
          this.setState({
           data: data
         });
          console.log(data)
          console.log(this.state.data)
         
       })
       .catch((err)=> {}) 


    axios
    .get('http://127.0.0.1:8000/haze/restapi/post/?format=json')
    .then(({ data })=> {
      this.setState({
          datax: data.reverse()
      }); 

      })
      .catch((err)=> {})   



    }   

  componentWillMount(){

       

  }

    follow (){

    console.log('follow clicked')

   }



  render() {

console.log(this.state)
console.log(localStorage['user_id'])

const profileCard = (
              <div className="card text-center">
              <div className="card-block">
                <div className="cardheader">

                </div>
                <div className="card-body">
                    <img alt="" src={this.state.data.user_image} />
                </div>
                
                <div className="card-text">
                    <div className="card-text">
                       <p>{this.state.data.user_name}</p>
                    </div>
                 <div className="card-body">
                   <button type="button" className="btn btn-success" onClick={() => this.follow()}>Follow</button>
                </div>    
                    
                   <strong>@{this.state.data.user_id}</strong>
                </div>
                </div>
            
  </div>)


const user_posts = this.state.datax.map((el,index) =>{
  if(el.post_user == this.state.data.user_id)  
    return( 
       <div className="col-lg-3 col-md-4 col-xs-6" key={index}>
          <a className="d-block mb-4 h-20">
            <img className="img-fluid img-thumbnail" src={el.post_image} alt=""/>
            <audio className='audioX' controls><source src={el.post_url} type="audio/mpeg"/></audio>
          </a>  
       </div>
)});


  return(
    <div>
    <AppHeader />
    <div className="container">
     {profileCard}

  <div className="row text-center text-lg-left"> 
  {user_posts}
  </div>
  </div>
  </div>
  
  );
  }
  }

export default UserProfile;
