import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";

class AlbumPage extends Component{
    state = {
        albums: [],
        loading: true
    }
    componentDidMount = () => {
        const albumId = this.props.match.params.id;
        let headers = new Headers({
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579",
          });
  
          fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "8275c582bamshd83a3179dd00459p19f0b2jsn94c889368579"
                }
            })
            .then(response => {
               return response.json()
              
            }).then((album)=>{
                //console.log("response from fetch", response.json());
                let albums = album
                this.setState({
                    albums: albums
                })
                console.log('new state', this.state.albums)
            })
            .catch(err => {
                console.log(err);
            });
            console.log('new state', this.state.albums)
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
            <div className="col-md-3 pt-5 text-center" id="img-container">
            <Image
                src={this.state.albums.cover_medium}
                className="card-img img-fluid"
                alt={this.state.albums.title}
                />
                <div className="mt-4 text-center">
                <p className="album-title">{this.state.albums.label}</p>
                </div>
                <div className="text-center">
                <a href="/artist_page.html?id=${album.artist.id}"><p className="artist-name">{this.state.albums.title}</p></a>
                </div>
                <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                    Play
                </button>
                </div>
            </div>
            <div className="col-md-8 p-5">
              <div className="row">
                <div className="col-md-10 mb-5" id="trackList">
                <div className="py-3 trackHover">
                    <a
                        href="#"
                        className="card-title trackHover px-3"
                        style={{color: "white"}}
                        >{this.state.albums.title}</a>
                    <small className="duration pr-3" style={{color: "white"}}
                        >{this.state.albums.duration}</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
            </>
            
        );
        
    }
}
export default AlbumPage;
