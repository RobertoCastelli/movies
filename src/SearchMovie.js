import React, { useState } from "react";
import searchMovieStyle from "./SearchMovie.module.css";

const SearchMovie = () => {
  //states
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    console.log("submitting request");
    const apiKey = "f48e2ec8ce02b71e8ba1cf229ad73fe6";
    const language = "en-US";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className={searchMovieStyle.form} onSubmit={searchMovies}>
        <input
          className={searchMovieStyle.input}
          type="text"
          name="query"
          placeholder="i.e. Shining"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={searchMovieStyle.button}>
          SUBMIT
        </button>
      </form>
      <div className={searchMovieStyle.cardList}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className={searchMovieStyle.card} key={movie.id}>
              <img
                className={searchMovieStyle.cardImage}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt="card-img"
              />
              <div className={searchMovieStyle.cardContent}>
                <h3>{movie.title}</h3>
                <p>release date: {movie.release_date}</p>
                <p>popularity: {movie.popularity}</p>
                <p>vote: {movie.vote_average}</p>
                <p>{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchMovie;
