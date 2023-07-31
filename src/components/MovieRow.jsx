import "./MovieRow.css";

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow_listarea">
        <div className="movieRow_list">
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
