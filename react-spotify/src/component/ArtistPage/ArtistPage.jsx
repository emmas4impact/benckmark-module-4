import React, {Component} from 'react';

class ArtistPage extends Component {
    
    state = {
        albums: [],
        tracks: [],
        artistName: [],
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
                let tracks = album.tracks.data
                const artistName = album.artist
                this.setState({
                   
                    artistName: artistName,
                    loading: false
                })
              
                console.log('new state album', this.state.artistName)
            })
            .catch(err => {
                console.log(err);
            });
            
    }
    
    render(){
        
        return(
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
        )
        
        
        
    }
    
    
}

export default ArtistPage;
