import {
  FETCH_MOVIES_SUCCESS,
  CHANGE_RATING,
} from "../../constants/actionTypes";

export const initialState = {
  moviesInfo: [],
};

export default function moviesReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS: {
      return { ...initialState, moviesInfo: action.payload };
    }
    case CHANGE_RATING: {
      newState.moviesInfo[action.itemNumber].star = action.rate;
      newState.moviesInfo.sort(function (a, b) {
        return b.star - a.star;
      });

      return { ...initialState, moviesInfo: [...newState.moviesInfo] };
    }
    default:
      return state;
  }
}
