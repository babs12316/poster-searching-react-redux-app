import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchPosterDetail from "../../actions/FetchPosterDetail/FetchPosterDetail";
import "../PosterDetail/PosterDetail.scss";
const PosterDetail = (props) => {
  const { params } = props.match;
  useEffect(() => {
    props.fetchPosterDetail(params.id);
  }, [params.id]);

  return (
    <div className="posterDetailContainer">
      <img
        src={props.posterDetail.thumb_url_large}
        alt="larger screenshot"
      ></img>
      <p> {props.posterDetail.paper_abstract}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posterDetail: state.posters.posterDetail,
    searchTerm: state.posters.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosterDetail: (posterId) => {
      dispatch(fetchPosterDetail(posterId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PosterDetail);
