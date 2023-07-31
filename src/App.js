import React, { useEffect, useState } from "react";
import getHomeList from "./getHomeList";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await getHomeList();
      setMovieList(list);

      // Pegando o featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    };
    loadAll();
  }, []);

  return (
    <div className="app">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <div className="section lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}

export default App;
