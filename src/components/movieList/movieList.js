import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMovies from "../../actions/fetchMovies/fetchMovies";
import MovieItem from "../movieItem/movieItem";
import "./movieList.scss";
import PosterList from '../PosterList/PosterList';

export class MovieList extends Component {
  render() {
    console.log("movie props is")
    return (
      <div className="app-container">
        <PosterList></PosterList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesInfo: state.movies.moviesInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
