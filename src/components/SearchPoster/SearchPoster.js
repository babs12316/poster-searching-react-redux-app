import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import '../SearchPoster/SearchPoster.scss';
import fetchPosters from '../../actions/FetchPosters/FetchPosters';
//import fetchSearchTerm from '../../actions/FetchSearchTerm/FetchSearchTerm';



const SearchPoster = (props) => {

    useEffect(() => {
        console.log("i am in searchposter"+props.searchTerm);
        
      }, );

    const [searchTerm,changeSearchTerm]=useState(props.searchTerm);

 
let handleChange=(e)=>{
    changeSearchTerm(e.target.value)
}

 let handleClick=()=>{
      props.fetchPosters(searchTerm)
  }
    return ( 
        <div className="searchBoxContainer"> 
        <input type="text" onChange={ handleChange} defaultValue={props.searchTerm} ></input>
        <button onClick={handleClick}>Search</button>

        {props.searchTerm}
       </div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        postersInfo: state.posters.postersInfo,
        searchTerm:state.posters.searchTerm
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosters: (searchTerm) => {
        dispatch( fetchPosters(searchTerm));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchPoster);
  