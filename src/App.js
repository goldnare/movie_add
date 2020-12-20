import React from "react";
import axios from "axios";


class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
