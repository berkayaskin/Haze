import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import AppHeader from '../components/AppHeader.js'


class SharePage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: [],
      datax: [],
      track_id: '',
      comment: '.',
      prev_url: '',
      artist: '.',
      image: '.',
      name: '.',
      formData: {},
      access_token: localStorage.getItem('access_token')
    };


     this.share = this.share.bind(this);
     this.updatecomment = this.updatecomment.bind(this);
  }

   updatecomment(evt) {
    this.setState({
      comment: evt.target.value
    });
  }




  share (track_id,prev_url){

    console.log('share clicked')
    console.log(track_id)
    console.log(this.state.comment)

    console.log(this.state.datax)

    this.state.formData['post_user'] = this.state.datax[0].id;
    this.state.formData['post_comment'] = this.state.comment;
    this.state.formData['post_url'] = prev_url;
    this.state.formData['post_artist'] = this.state.data[0].artists[0].name;
    this.state.formData['post_name'] = this.state.data[0].name;
    this.state.formData['post_image'] = this.state.data[0].album.images[0].url;
   

    console.log('id : ' +this.state.formData['id']+ 'comment : ' + this.state.formData['comment'] + 'prev_url : ' + this.state.formData['prev_url'] )

   

    fetch("http://127.0.0.1:8000/haze/restapi/post/", {
            method: 'POST',
            headers: {
                'Authorization': 'Basic '+btoa('admin:12345678.'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.formData)
        }).then(function (response) {

           
        });
     

    window.location ='/profile/';

   }



 componentDidMount(){
  this.state.track_id = this.props.match.params.track_id;

  console.log(this.state.track_id)

    axios
      .get('https://api.spotify.com/v1/me/?format=json',{
         method: 'GET',
         headers: { 'Authorization': 'Bearer ' +  this.state.access_token },
      })
      .then(({ data })=> {
        this.setState({
          datax: [data]
        });
      })
      .catch((err)=> {})


 axios
     .get('https://api.spotify.com/v1/tracks/'+this.state.track_id,{
         method: 'GET',
         headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') },
      })
      .then(({ data })=> {
        this.setState({
          data: [data]
        });
      
      console.log(this.state.data)  
      }
      

      )
      .catch((err)=> {}) 

  }



  render() {

  const search_list = this.state.data.map((el, index) => {
      return (
        <li className="list-group-item"  key={index}>
                        <div className="col-xs-12 col-sm-3">
                            <img src={el.album.images[0].url} alt="" className="img-responsive img-circle" width="100px" />
                            
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <span className="name">{el.name}</span><br/>
                            <span className="visible-xs"> <span className="text-muted">{el.album.name}</span><br/></span>
                            <audio className='audioX' controls><source src={el.preview_url} type="audio/mpeg"/></audio>
                        </div>
                        
      <div className="input-group">
        <input value={this.state.comment} onChange={this.updatecomment} type="text" className="form-control" placeholder="comment ..." aria-label="comment ..."/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-success" accessKey={el.id} onClick={() => this.share(el.id,el.preview_url)}>Share</button>
        </span>
      </div>                 
        </li>

     
  
  )});


    


  return(
    <div>
    <AppHeader />
            <p>Share PAGE</p>
            {search_list}
    </div>        
            
  );
  }
  }

export default SharePage;
