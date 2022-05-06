import React from "react";

function MovieDeail(props) {
  console.log(props);
  return (
    <div className="shadow">
      {props.children}
    <div className="row "   key={props.setMovieData.id}
    id={props.setMovieData.id}
    >
      
        <div className="col-md-5">
          <img
            className="mt-4 mb-4"
            src={`https://image.tmdb.org/t/p/w500/${props.setMovieData.backdrop_path}`}
            alt={props.setMovieData.original_title}
          />
           </div>
          <div className="col-md-7">
            

            <div className="text-start mt-4 mb-4">
              <div className="card-title ">
                <h2>{props.setMovieData.original_title} </h2>
              </div>
              <p className="card-text  ">
                {props.setMovieData.overview}
              </p>
              <p><b>Media Type:</b> {props.setMovieData.media_type}</p>
              <p><b>Release Date:</b> {props.setMovieData.release_date}</p>
              <p><b>Vote:</b> {props.setMovieData.vote_average}</p>
              <p><b>Vote Count:</b> {props.setMovieData.vote_count}</p>
            </div>
          </div>
      
      </div>
      </div>
  );
}

export default MovieDeail;
