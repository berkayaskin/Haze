import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import AppHeader from '../components/AppHeader.js'
import '../css/Profile.css'

class Discover extends Component {


constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchquery: '',
      access_token: localStorage.getItem('access_token')
    };                

    this.search = this.search.bind(this);
    this.share = this.share.bind(this);
    this.updatesearchquery = this.updatesearchquery.bind(this);



  }


 updatesearchquery(evt) {
    this.setState({
      searchquery: evt.target.value
    });
  }


search(e,accessKey) {

    e.preventDefault();
    var searchquery = this.state.searchquery;
    var access_token = this.state.access_token;
    console.log('search clicked.');
    console.log(searchquery);

    

    axios
      .get('https://api.spotify.com/v1/search?q='+this.state.searchquery+'&type=track',{
         method: 'GET',
         headers: { 'Authorization': 'Bearer ' + this.state.access_token },
      })
      .then(({ data })=> {
      	this.setState({
          data: [data]
        });
      })
      .catch((err)=> {})


    var x = document.getElementsByClassName("audioX");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].load()
    }
  

}


   share (track_id){

    console.log('share clicked')
    console.log(track_id) 

    window.location ='/sharepage/' + track_id;

     
   }



   componentDidMount(){
    var client_id = localStorage.getItem('client_id');
    var client_secret = localStorage.getItem('client_secret');
    var access_token = localStorage.getItem('access_token');
    
    
        //ajax deleted
    


  }

  componentWillAmount(){
    console.log(this.state.data)
    console.log(this.state.data[0])


  }



  render() {



 

  const searchList = this.state.data.map((el, index,tracks) => {
      return (
      <div key={index}>
      <ul className="list-group">

      {el.tracks.items.map((elx,indexx) =>(
       
                  
                
        <li className="list-group-item"  key={indexx}>
                        <div className="col-xs-12 col-sm-3">
                            <img src={elx.album.images[0].url} alt="" className="img-responsive img-circle" width="100px" />
                            <button type="button" className="btn btn-success" accessKey={elx.id} onClick={() => this.share(elx.id)}>Share</button>
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <span className="name">{elx.name}</span><br/>
                            <span className="visible-xs"> <span className="text-muted">{elx.album.name}</span><br/></span>
                            <audio className='audioX' controls><source src={elx.preview_url} type="audio/mpeg"/></audio>
                        </div>
                        
                        
        </li>
     
                      
      
      ))}
       </ul> 
    </div>


  )});

   



  return(
    <div>
    <AppHeader />
    <p>Discover PAGE</p>


    <div className="input-group">
      <input value={this.state.searchquery} onChange={this.updatesearchquery} type="text" className="form-control" placeholder="Search for..." aria-label="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button" onClick={this.search} >Goxx!!</button>
      </span>
    </div>


    {searchList}
   

    </div>

  );
  }
  }

export default Discover;
