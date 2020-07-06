import React from "react";
import searchMovieStyle from "./SearchMovie.module.css";

const MovieCard = ({
  key,
  title,
  poster,
  date,
  popularity,
  vote,
  overview,
}) => {
  return (
    <div className={searchMovieStyle.card} key={key}>
      <img
        className={searchMovieStyle.cardImage}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster}`}
        alt="card-img"
      />
      <div className={searchMovieStyle.cardContent}>
        <h3>{title}</h3>
        <p>release date: {date}</p>
        <p>popularity: {popularity}</p>
        <p>vote: {vote}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
