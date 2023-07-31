const API_KEY = "de929f10e798790bab5f3f5575da1e8e";

const API_BASE = "https://api.themoviedb.org/3";

/*
- originais da netflix
- recomendados (trending)
- em alta (top rated
- ação
- terror
- romance
- documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const getHomeList = async () => {
  return [
    {
      slug: "originals",
      title: "Originais da Netflix",
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentário",
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
};
export default getHomeList;
