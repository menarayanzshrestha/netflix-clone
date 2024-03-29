const API_KEY = "be79b8d0662e4e948ef44cf4afd1018d";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentares: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
