import {
  FETCH_POSTERS_SUCCESS,
  FETCH_POSTERS_REQUEST,
  FETCH_POSTERS_FAILURE,
  FETCH_POSTER_DETAIL_SUCCESS,
} from "../../constants/actionTypes";

export const initialState = {
  postersInfo: [],
  searchTerm: "",
  posterDetail: [],
  loadingPosters:"",
  error:''
};

export default function posterReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_POSTERS_REQUEST:{
      return {
        ...initialState,
        loadingPosters:true
      };
    }

    case FETCH_POSTERS_FAILURE:{
      let errorMsg="No record found! please enter another term."
      if(action.payload===undefined){
        return {
          ...initialState,
          loadingPosters:false,
          error:errorMsg
        };
      }else{
      return {
        ...initialState,
        loadingPosters:false,
        error:action.payload
      };
    }
    }
    
    case FETCH_POSTERS_SUCCESS: {
      console.log("body is"+action.payload.length)
      if(action.payload.length<1){
        let errorMsg = "No record found! please enter another term."
        return {
          ...initialState,
          postersInfo: action.payload,
          searchTerm: action.searchTerm,
          loadingPosters:false,
          error:errorMsg
        };
      }else{
      return {
        ...initialState,
        postersInfo: action.payload,
        searchTerm: action.searchTerm,
        loadingPosters:false
      };
    } 
    }
    case FETCH_POSTER_DETAIL_SUCCESS: {
      return { ...initialState, posterDetail: action.payload };
    }

    default:
      return state;
  }
}
