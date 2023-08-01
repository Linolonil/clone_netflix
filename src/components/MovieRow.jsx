import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MovieRow = ({ title, items }) => {
  const [scrollx, setScrollx] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };
  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollx(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movierow_left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: "50px" }} />
      </div>
      <div className="movierow_right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: "50px" }} />
      </div>
      <div className="movieRow_listarea">
        <div
          className="movieRow_list"
          style={{ marginLeft: scrollx, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div
                key={key} // Adicionando a propriedade key usando o índice da lista
                className="movieRow_item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="imagem de filmes"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
