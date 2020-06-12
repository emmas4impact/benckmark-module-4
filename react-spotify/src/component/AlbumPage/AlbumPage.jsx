import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class AlbumPage extends Component{
    state = {
        songs: [],
        loading: true
    }
    componentDidMount =()=>{
        const songId = this.props.match.params.id;
       
        
    }
    
    render(){
        
        return (
            <>
            <div className="col-12 col-md-9 offset-md-3 mainPage">
              <div className="row mb-3">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                  <a href="#">TRENDING</a>
                  <a href="#">PODCAST</a>
                  <a href="#">MOODS AND GENRES</a>
                  <a href="#">NEW RELEASES</a>
                  <a href="#">DISCOVER</a>
                </div>
              </div>
    
              <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                  <h2 className="titleMain"></h2>
                  <div id="followers"></div>
                  <div className="d-flex justify-content-center" id="button-container">
                    <button
                      className="btn btn-success mr-2 mainButton d-none"
                      id="playButton"
                    >
                      PLAY
                    </button>
                    <button
                      className="btn btn-outline-light mainButton d-none"
                      id="followButton"
                    >
                      FOLLOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                  <div className="mt-4 d-flex justify-content-start">
                    <h2 className="text-white font-weight-bold">Tracks</h2>
                  </div>
                  <div className="pt-5 mb-5">
                    <div className="row" id="apiLoaded"></div>
                  </div>
                </div>
              </div>
            </div>
          
            </>
            
        );
        
    }
}
export default AlbumPage;
