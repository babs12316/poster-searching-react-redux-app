import React, { useEffect, useState } from "react";
import "./PosterItem.scss";
import { Link } from "react-router-dom";
const PosterItem = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageDisabled, setNextPageDisabled] = useState(false);
  const [previousPageDisabled, setPreviousPageDisabled] = useState(true);
  const [hide, setHide] = useState("hide");

  useEffect(() => {
    // pagination button show/hide
    if (Object.keys(props.postersInfo).length > 0) {
      setHide("show");
    }else{
      setHide("hide");
    }
  });

  // go to next page
  let nextPage = () => {
    if ((currentPage + 1) * 10 <= Object.keys(props.postersInfo).length) {
      setCurrentPage(currentPage + 1);
      setPreviousPageDisabled(false);
    } else {
      setNextPageDisabled(true);
      setPreviousPageDisabled(false);
    }
  };

// go to previous page
  let previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setPreviousPageDisabled(true);
      setNextPageDisabled(false);
    }
  };

  return (
    <div className="posterContainer">
      
      {Object.keys(props.postersInfo)
        .slice(currentPage, 11)
        .map((item, itemNumber) => (
          <Link
            to={"/poster/" + props.postersInfo[item].id}
            key={itemNumber}
            className="posters"
          >
            <div className="title"> {props.postersInfo[item].title}</div>
            <div className="headline">Author</div>
            <div className="author">
              {" "}
              {props.postersInfo[item].author_names}
            </div>
            <div className="headline">Keywords</div>
            <div className="keyword">
              {" "}
              {props.postersInfo[item].keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </div>
            <div className="headline">Event</div>
            <div className="eventName"> {props.postersInfo[item].event}</div>
            <div className="headline">Event preview</div>
            <div className="eventPreview">
              {" "}
              <img
                src={props.postersInfo[item].thumb_url}
                alt="Event preview"
              />
            </div>
          </Link>
        ))}
      <div id="pagination" className={hide}>
        <button disabled={previousPageDisabled} onClick={previousPage}>
          Previous Page
        </button>
        <button disabled={nextPageDisabled} onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PosterItem;


