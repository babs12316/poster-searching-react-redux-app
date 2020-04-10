import {
  FETCH_POSTERS_SUCCESS,
  FETCH_POSTER_DETAIL_SUCCESS,
} from "../../constants/actionTypes";

export const initialState = {
  postersInfo: [],
  searchTerm: "",
  posterDetail: [],
};

export default function posterReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTERS_SUCCESS: {
      return {
        ...initialState,
        postersInfo: action.payload,
        searchTerm: action.searchTerm,
      };
    }
    case FETCH_POSTER_DETAIL_SUCCESS: {
      return { ...initialState, posterDetail: action.payload };
    }

    default:
      return state;
  }
}
