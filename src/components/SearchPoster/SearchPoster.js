import React, { useState } from "react";
import { connect } from "react-redux";
import "../SearchPoster/SearchPoster.scss";
import fetchPosters from "../../actions/FetchPosters/FetchPosters";
import { useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';

const SearchPoster = (props) => {
  const history = useHistory();
  const [searchTerm, changeSearchTerm] = useState(props.searchTerm);

  let handleChange = (e) => {
    changeSearchTerm(e.target.value);
  };

  let handleClick = () => {
    props.fetchPosters(searchTerm);
    history.goBack();
  };
  return (
    <div className="searchBoxContainer">
      <input
        type="text"
        onChange={handleChange}
        defaultValue={props.searchTerm}
        placeholder="Enter search term"
      ></input>
      <button onClick={handleClick}>Search</button>
      { props.loadingPosters && <div className="loadingPosters"><ReactLoading type={'spokes'} color={'#008000'} height={'5%'} width={'5%'} /></div>}
      <div className="error"> {props.error}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postersInfo: state.posters.postersInfo,
    searchTerm: state.posters.searchTerm,
    loadingPosters:state.posters.loadingPosters,
    error:state.posters.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosters: (searchTerm) => {
      dispatch(fetchPosters(searchTerm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPoster);
