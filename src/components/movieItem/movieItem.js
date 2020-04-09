import React, { Component } from "react";
import { connect } from "react-redux";
import changeRating from "../../actions/changeRating/changeRating";

import "./movieItem.scss";

class MovieItem extends Component {
  state = {
    active: "",
  };
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="movie-container">
        {Object.keys(this.props.moviesInfo).map((item, itemNumber) => (
          <div key={itemNumber} className="movies">
           <div className="title">  {this.props.moviesInfo[item].title}</div>
            <div className="ratings">
              <span
                className={this.props.moviesInfo[item].star === 1 ? "active" : "" }
                onClick={(e) => {
                  this.props.changeRating(1, itemNumber);
                }}
              >
                1
              </span>
              <span
                className={
                  this.props.moviesInfo[item].star === 2 ? "active" : ""
                }
                onClick={(e) => this.props.changeRating(2, itemNumber)}
              >
                2
              </span>
              <span
                className={
                  this.props.moviesInfo[item].star === 3 ? "active" : ""
                }
                onClick={(e) => this.props.changeRating(3, itemNumber)}
              >
                3
              </span>
              <span
                className={
                  this.props.moviesInfo[item].star === 4 ? "active" : ""
                }
                onClick={(e) => this.props.changeRating(4, itemNumber)}
              >
                4
              </span>
              <span
                className={
                  this.props.moviesInfo[item].star === 5 ? "active" : ""
                }
                onClick={(e) => this.props.changeRating(5, itemNumber)}
              >
                5
              </span>
            </div>
          </div>
        ))}
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
    changeRating: (rate, itemNumber) => {
      dispatch(changeRating(rate, itemNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
