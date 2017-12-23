import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import AppHeader from '../components/AppHeader.js'

import '../css/Profile.css'

class Profile extends Component {


constructor(props) {
    super(props);

    this.state = {
      data: [],
      datax: [],
    };
  }


   componentDidMount(){
    var client_id = localStorage.getItem('client_id');
    var client_secret = localStorage.getItem('client_secret');
    var access_token = localStorage.getItem('access_token');
       

    axios
      .get('https://api.spotify.com/v1/me/?format=json',{
         method: 'GET',
         headers: { 'Authorization': 'Bearer ' + access_token },
      })
      .then(({ data })=> {
      	this.setState({
          data: [data]
        });
      })
      .catch((err)=> {})


      // user_id ile apiden filterlamak lazım  
      // http://blog.josephmisiti.com/customzing-apis-with-django-rest-framework
    /*axios
    .get('http://127.0.0.1:8000/movie/restapi/user/?format=json')
    .then(({ data })=> {
        this.setState({
          data: [data]
        });
      })
      .catch((err)=> {}) 
*/
  


  }

componentWillMount(){
     axios
    .get('http://127.0.0.1:8000/haze/restapi/post/?format=json')
    .then(({ data })=> {
      this.setState({
          datax: data.reverse()
      }); 

      })
      .catch((err)=> {})   

}


  render() {


const user_posts = this.state.datax.map((el,index) =>{
  if(el.post_user == this.state.data[0].id)  
    return( 
       <div className="col-lg-3 col-md-4 col-xs-6" key={index}>
          <a className="d-block mb-4 h-20">
            <img className="img-fluid img-thumbnail" src={el.post_image} alt=""/>
            <audio className='audioX' controls><source src={el.post_url} type="audio/mpeg"/></audio>
          </a>  
       </div>
)});
  
const profileCard = this.state.data.map((el, index) => {
      return (
   
            <div className="card text-center" key={index}>
              <div className="card-block">
                <div className="cardheader">

                </div>
                <div className="card-body">
                    <img alt="" src={el.images[0].url} />
                </div>
                <div className="card-text">
                    <div className="card-text">
                       <p>{el.display_name}</p>
                    </div>
                   <strong>@{el.id}</strong>
                </div>
                </div>
            
  </div> 
   )});

const postlist = this.state.datax.map((el, index) => {
      return (

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

export default Profile;
