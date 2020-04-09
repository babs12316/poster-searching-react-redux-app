import React, {useEffect  } from "react";
import "./PosterItem.scss";
import { connect } from "react-redux";
const PosterItem = (props) => {
    useEffect(() => {
        //console.log("i am posteritem");
        props.fetchPosters(props.searchTerm);
      }, [props.searchTerm]);

    return (
         <div className="posterContainer">
         {Object.keys(props.postersInfo).map((item, itemNumber) => (
          <a href={'/poster/'+props.postersInfo[item].id} key={itemNumber} className="posters">
             <div className="title">  {props.postersInfo[item].title}</div>
             <div className="headline">Author</div>
           <div className="author">  {props.postersInfo[item].author_names}</div>
           <div className="headline">Keywords</div>
           <div className="keyword"> {props.postersInfo[item].keywords.map((keyword,index)=>(<li key={index}>{keyword}</li>))}</div>
           <div className="headline">Event</div>
           <div className="eventName"> {props.postersInfo[item].event}</div>
           <div className="headline">Event preview</div>
           <div className="eventPreview"> <img src={props.postersInfo[item].thumb_url} alt="Event preview"/></div>
            </a>
        ))}
    </div>  );
}
const mapStateToProps = (state) => {
    return {
      postersInfo: state.posters.postersInfo,
      searchTerm: state.posters.searchTerm
    };
  };
  

  
  export default connect(mapStateToProps)(PosterItem);
  