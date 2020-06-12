import React, {Component} from 'react';
import {Navbar, Nav, li} from 'react-bootstrap';
import Gallery from '../Gallery/Gallery';
import {Link, withRouter} from 'react-router-dom';


let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = [
    "eminem",
    "snoopdogg",
    "lilwayne",
    "drake",
    "kanyewest",
  ];
class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Rock: [],
            Hiphop: [],
            Pop: [],
            loading: true,
            error: false,
            comments: [],
        };
      }
    
    
    componentDidMount = () =>{
        
        let headers = new Headers({
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
          });
        
          let rockRandomArtists = [];
          let popRandomArtists = [];
          let hipHopRandomArtists = [];
  
          while (rockRandomArtists.length < 4) {
            let artist =
              rockArtists[Math.floor(Math.random() * rockArtists.length)];
  
            if (!rockRandomArtists.includes(artist)) {
              rockRandomArtists.push(artist);
            }
          }
  
          while (popRandomArtists.length < 4) {
            let artist =
              popArtists[Math.floor(Math.random() * popArtists.length)];
  
            if (!popRandomArtists.includes(artist)) {
              popRandomArtists.push(artist);
            }
          }
  
          while (hipHopRandomArtists.length < 4) {
            let artist =
              hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
  
            if (!hipHopRandomArtists.includes(artist)) {
              hipHopRandomArtists.push(artist);
            }
          }
  
          for (let j = 0; j < rockRandomArtists.length; j++) {
            fetch(
              "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
                rockRandomArtists[j],
              {
                method: "GET",
                headers,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((artists) => {
                let songInfo = artists.data;
                
                console.log(songInfo)
                this.setState({Rock : songInfo,loading: false,})
                console.log('state ', this.state.Rock)
              })
              .catch((error) => {
                console.log(error);
              });
          }
  
          for (let j = 0; j < popRandomArtists.length; j++) {
            fetch(
              "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
                popRandomArtists[j],
              {
                method: "GET",
                headers,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((artists) => {
                let songInfo = artists.data
                    this.setState({
                        loading: false,
                        Pop : songInfo
                    
                    })
    
                
              })
              .catch((error) => {
                console.log(error);
              });
          }
  
          for (let j = 0; j < hipHopRandomArtists.length; j++) {
            fetch(
              "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
                hipHopRandomArtists[j],
              {
                method: "GET",
                headers,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((artists) => {
                let songInfo = artists.data;
                this.setState({Hiphop : songInfo,loading: false})
                //let div = document.querySelector("#hipHopSection");
                //div.innerHTML += albumCard(songInfo[0]);
              })
              .catch((error) => {
                console.log(error);
              });
          }
    
       
    }
    

    
   render(){
       
       return(
           <>
              <div className="col-12 col-md-9 offset-md-3 mainPage">
                    <div className="row">
                        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="#">TRENDING</a>
                        <a href="#">PODCAST</a>
                        <a href="#">MOODS AND GENRES</a>
                        <a href="#">NEW RELEASES</a>
                        <a href="#">DISCOVER</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="searchResults" className="d-none">
                            <h2>Search Results</h2>
                            <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            ></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="rock">
                            <h2>Rock Classics</h2>
                            <Gallery
                               
                                loading={this.state.loading}
                                songs={this.state.Rock.slice(0, 6)}
                                
                            />
                               
                            <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                            >
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="pop">
                            <h2>Pop Artists</h2>
                            <Gallery
                               
                               loading={this.state.loading}
                               songs={this.state.Pop.slice(0, 6)}
                               
                           />
                            <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="popSection"
                            >
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                        <div id="hiphop">
                            <h2>HipHop Top</h2>
                            <Gallery
                               
                               loading={this.state.loading}
                               songs={this.state.Hiphop.slice(0, 6)}
                               
                           />
                            <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="hipHopSection"
                            >
                             
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
              
           </>
       )
   }
           
    
}

export default HomePage; 