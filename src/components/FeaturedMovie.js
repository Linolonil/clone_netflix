import React from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <div
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured_vertical">
        <div className="featured_horizontal">
          <div className="featured_name">{item.original_name}</div>
          <div className="featured_info">
            <div className="featured_points">{item.vote_average}</div>
            <div className="featured_year">{firstDate.getFullYear()}</div>
            <div className="featured_seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons != 1 ? "s" : ""}
            </div>
            <div className="featured_description">{description}</div>
            <div className="featured_buttons">
              <a className="featured_watchbutton" href={`/watch/${item.id}`}>
                ▸ Assistir
              </a>
              <a
                className="featured_mylistbutton"
                href={`/list/add/${item.id}`}
              >
                + Minha Lista
              </a>
            </div>
            <div className="featured_genres">
              <strong>Gêneros: {genres.join(", ")}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
