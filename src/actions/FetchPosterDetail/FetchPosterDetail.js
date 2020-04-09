import axios from 'axios';
import { FETCH_POSTER_DETAIL, FETCH_POSTER_DETAIL_SUCCESS, FETCH_POSTER_DETAIL_FAILURE } from '../../constants/actionTypes';




export function fetchPostersRequest() {
  return {
    type: FETCH_POSTER_DETAIL,
  };
}

export function fetchPostersSuccess(body) {

  
 // console.log("POSTERS sss data is"+JSON.stringify(body))
  return {
    type: FETCH_POSTER_DETAIL_SUCCESS,
    payload:body
  }
}

export function fetchPostersFailure(ex) {
  return {
    type: FETCH_POSTER_DETAIL_FAILURE,
    ex,
  };
}

export default function fetchPosterDetail(posterId) {
    console.log("poster id is"+posterId);
 return (dispatch) => {
    dispatch(fetchPostersRequest());
    return axios.get('https://cors-anywhere.herokuapp.com/https://staging-ng.morressier.com/events_manager/v2/posters/'+posterId)
      .then(response => response.data.poster)
      .then(data => dispatch(fetchPostersSuccess(data)))
      .catch(ex => dispatch(fetchPostersFailure(ex)));
  };
}
