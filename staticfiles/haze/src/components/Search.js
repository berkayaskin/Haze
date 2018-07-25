import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import AppHeader from '../components/AppHeader.js'
import '../css/Profile.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class Search extends Component {


constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchquery: '',
      access_token: localStorage.getItem('access_token')
    };                

    this.search = this.search.bind(this);
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
    .get('http://127.0.0.1:8000/haze/restapi/user/?format=json')
    .then(({ data })=> {
      this.setState({
          data: data.reverse()
      }); 

      })
      .catch((err)=> {})   


}

   componentDidMount(){
    var client_id = localStorage.getItem('client_id');
    var client_secret = localStorage.getItem('client_secret');
    var access_token = localStorage.getItem('access_token');
    
  
    


  }

  componentWillAmount(){

   
  }



  render() {  
    console.log(this.state)

     /*const profile_list = this.state.data.map((el,index)=> {
        //if(el.user_name.toLowerCase().indexOf(this.state.searchquery) !== -1 || el.user_id.toLowerCase().indexOf(this.state.searchquery) !== -1){ 
       //İKİNCİ ARAMADA LOWERCASE HATASI
        if(el.user_name.toLowerCase().indexOf(this.state.searchquery) !== -1 || el.user_id.toLowerCase().indexOf(this.state.searchquery) !== -1){ 
        return(
          <div key={index}>

          <ul className="list-group">   
         <li className="list-group-item"  key={index}>
                        <div className="col-xs-12 col-sm-3">
                            <img src={el.user_image} alt="" className="img-responsive img-circle" width="100px" />
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <span className="name">{el.user_name}</span><br/>
                            <span className="visible-xs"> <span className="text-muted">@{el.user_id}</span><br/></span>
                        </div>             
         </li>           
         </ul> 
       </div>
          )}}) */


     const xxx = this.state.data.map((el,index)=> {
      
        if(el.user_name.toLowerCase().indexOf(this.state.searchquery.toLowerCase()) !== -1 || el.user_id.toLowerCase().indexOf(this.state.searchquery.toLowerCase()) !== -1){     
        return(

       
         <div key={index}>
          <Link to={'/userprofile/'+el.user_id} >
          <ul className="list-group">   
         <li className="list-group-item"  key={index}>
                        <div className="col-xs-12 col-sm-3">
                            <img src={el.user_image} alt="" className="img-responsive img-circle" width="100px" />
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <span className="name">{el.user_name}</span><br/>
                            <span className="visible-xs"> <span className="text-muted">@{el.user_id}</span><br/></span>
                        </div>             
         </li>           
         </ul> 
          </Link>
       </div>
    
          )}}) 

    



  return(
    <div>
    <AppHeader />
    <p>SEARCH PAGEEEEEEEEEE FOR PROFİLES</p>


    <div className="input-group">
      <input value={this.state.searchquery} onChange={this.updatesearchquery} type="text" className="form-control" placeholder="Search for..." aria-label="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="button" onClick={this.search} >Search!!</button>
      </span>
    </div>


   
    {xxx}
   

    </div>

  );
  }
  }

export default Search;
