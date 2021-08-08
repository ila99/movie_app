import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// mounting , updating, unmounting
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // 데이터를 가져올 때까지 기다림
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rationg");
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  renderMovies(movies) {
    return movies.map(movie => {
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />;
    });
  }

  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">{isLoading ? (<div className="loader"><span className="loader__test">"Loading..."</span></div>) : (<div className="movies">
      {this.renderMovies(movies)}</div>)}</section>;
  }
}

export default App;
