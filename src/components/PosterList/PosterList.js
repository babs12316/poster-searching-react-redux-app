import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PosterItem from "../PosterItem/PosterItem";
import SearchPoster from "../SearchPoster/SearchPoster";
import '../PosterList/PosterList.scss';

export const PosterList = (props) => {
  return (
    <div className="posterListContainer">
      <Link to="/">Home</Link>
      <h2>Welcome to Poster search!</h2>
      <SearchPoster></SearchPoster>
      <PosterItem 
        postersInfo={props.postersInfo}
        searchTerm={props.searchTerm}
      ></PosterItem>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postersInfo: state.posters.postersInfo,
    searchTerm: state.posters.searchTerm,
  };
};

export default connect(mapStateToProps)(PosterList);
