import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/No_picture_available.png/800px-No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const {
          imdbID: id,
          Poster: poster,
          Title: title,
          Year: year,
        } = movie;
        return (
          <Link key={id} to={`/movies/${id}`} className="movie">
            <article>
              <img
                src={poster === "N/A" ? url : poster}
                alt={title}
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
