import React from 'react';

const artistPage = (props) =>{
    
    return(
        <>
         <div class="col-12 col-md-9 offset-md-3 mainPage">
          <div class="row mb-3">
            <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 pt-5 text-center" id="img-container"></div>
            <div class="col-md-8 p-5">
              <div class="row">
                <div class="col-md-10 mb-5" id="trackList"></div>
              </div>
            </div>
          </div>
        </div>
    
        </>
    )
}

export default artistPage;
