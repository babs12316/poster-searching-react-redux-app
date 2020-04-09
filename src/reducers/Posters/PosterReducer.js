import {
    FETCH_POSTERS_SUCCESS,
  //  FETCH_SEARCH_TERM,
    FETCH_POSTER_DETAIL_SUCCESS
  } from "../../constants/actionTypes";
  
  export const initialState = {
    postersInfo: [],
    searchTerm:'dd',
    posterDetail:[]
  };
  
  export default function posterReducer(state = initialState, action) {
   // const newState = { ...state };
    switch (action.type) {
      case FETCH_POSTERS_SUCCESS: {
        console.log("i am in sucees"+action.searchTerm)
        return { ...initialState, postersInfo: action.payload,searchTerm:action.searchTerm };
      }
    /*  case FETCH_SEARCH_TERM: {
        return { ...initialState, searchTerm: action.payload };
      }*/
     case FETCH_POSTER_DETAIL_SUCCESS: {
       
        return { ...initialState, posterDetail: action.payload };
      }
      
      default:
        return state;
    }
  }
  