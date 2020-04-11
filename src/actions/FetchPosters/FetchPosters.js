import axios from "axios";
import {
  FETCH_POSTERS_REQUEST,
  FETCH_POSTERS_SUCCESS,
  FETCH_POSTERS_FAILURE,
} from "../../constants/actionTypes";

export function fetchPostersRequest() {
  return {
    type: FETCH_POSTERS_REQUEST,
  };
}

export function fetchPostersSuccess(body, searchTerm) {
  console.log("pyaload is"+JSON.stringify(body))
  return {
    type: FETCH_POSTERS_SUCCESS,
    payload: body,
    searchTerm: searchTerm,
  };
}

export function fetchPostersFailure(ex) {
 
  return {
    type: FETCH_POSTERS_FAILURE,
    ex:ex.message,
  };
}

export default function fetchPosters(searchTerm) {
    return (dispatch) => {
    dispatch(fetchPostersRequest());
    return axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://staging-ng.morressier.com/events_manager/v3/posters/search?query=" +
          searchTerm
      )
      .then((response) => response.data.posters)
      .then((data) => dispatch(fetchPostersSuccess(data, searchTerm)))
      .catch((ex) => dispatch(fetchPostersFailure(ex)));
  };

}