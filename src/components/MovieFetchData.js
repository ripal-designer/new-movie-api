import React, { useState, useEffect } from "react";
import MovieDeail from "./MovieDeail";
// import MovieDetail from "./MovieDetail";

function MovieFetchData() {
  const [jasonData, setJasonData] = useState(null);
  const [movieDataID, setMovieDataID] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [showData, setShowData] = useState(true);
  const [showDec, setshowDec] = useState(false);

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/4/list/1?api_key=7401656959c2cb60d9c329797be3652f"
    )
      .then((response) => response.json())
      .then(setJasonData);
  };

  //   console.log(jasonData);

  useEffect(() => {
    getData();
  }, []);

  const LinkClick = (item) => {
    setMovieData(item);
    setMovieDataID(item.id);
    setShowData(false);
    setshowDec(true);
  };
  // console.log(jasonData)
  if (jasonData) {
    return (
      <>



      {/* <Search jasonData={jasonData} /> */}
        
      <div className="container mt-10 mb-10">
          <div className="row">
            <h1>Latest Movie</h1>
            {jasonData.results.map((item) => {
              return (
                <>
                  {showData && (
                    <div className="col-md-3">
                    <div
                      key={item.id}
                      id={item.id}
                      className="card  mt-4"
                      onClick={(e) => {
                        LinkClick(item);
                        setShowData(false);
                      }} >
                     
                        <img
                          className="card-img-top"
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt={item.original_title}
                        />
                    
                      <div className="card-body">
                        <div className="card-title text-truncate">
                          <b>{item.original_title} </b>
                        </div>
                        <p className="card-text text-truncate">{item.overview}</p>
                        <p><b>Vote: </b>{item.vote_average}</p>
                        <button type="button" className="btn btn-outline-primary">Read more</button>

                      </div>
                    </div>
                    </div>
                  )}
                  {showDec === true && movieDataID === item.id && (
                    <>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                    <button type="button " className="btn btn-outline-warning "
                        onClick={() => {
                          setShowData(true);
                          setshowDec(false);
                        }}
                      >
                        Back
                      </button>
                      </div>
                      
                      <MovieDeail setMovieData={movieData} />
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return <>No Data Available</>;
}

export default MovieFetchData;
