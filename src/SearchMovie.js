import React, { useState } from "react";
import searchMovieStyle from "./SearchMovie.module.css";
import MovieCard from "./MovieCard";

const SearchMovie = () => {
  //states
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    if (query !== "") {
      document.getElementById("textAlert").innerText = "";
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
        console.log(err);
      }
    } else {
      document.getElementById("textAlert").innerText = "SEARCH A MOVIE";
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
          SEARCH
        </button>
      </form>
      <p id="textAlert" className={searchMovieStyle.alertText}></p>
      <div className={searchMovieStyle.cardList}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              popularity={movie.popularity}
              vote={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </>
  );
};

export default SearchMovie;
