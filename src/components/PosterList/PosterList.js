import React from "react";
import { connect } from "react-redux";
import fetchPosters from '../../actions/FetchPosters/FetchPosters';
import PosterItem from '../PosterItem/PosterItem';
import SearchPoster from '../SearchPoster/SearchPoster';

const PosterList = (props) => {
  
    return ( <div>
        <SearchPoster></SearchPoster> 
        {props.searchTerm}
        <PosterItem
        fetchPosters={props.fetchPosters}
        postersInfo={props.postersInfo}
        searchTerm={props.searchTerm}
        ></PosterItem>

    </div> );
}
 
const mapStateToProps = (state) => {
    return {
      postersInfo: state.posters.postersInfo,
      searchTerm: state.posters.searchTerm
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosters: () => {
        dispatch(fetchPosters(''));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PosterList);
  