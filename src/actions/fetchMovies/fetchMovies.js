import axios from 'axios';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../../constants/actionTypes';




export function fetchMoviesRequest() {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
}

export function fetchMoviesSuccess(body) {

  
  //console.log("movies sss data is"+JSON.stringify(body))
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload:body
  }
}

export function fetchMoviesFailure(ex) {
  return {
    type: FETCH_MOVIES_FAILURE,
    ex,
  };
}

export default function fetchMovies() {
  //console.log("i am called")
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    return axios.get('http://localhost:3000/movies.json')
      .then(response => response.data)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(ex => dispatch(fetchMoviesFailure(ex)));
  };
}
