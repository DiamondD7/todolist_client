import React from "react";

import "../styles/openlistsstyles.css";
const OpenList = (props) => {
  return (
    <div>
      <div className="openedData-container">
        <h2 className="data-title">{props.opened.Title}</h2>
        <p className="data-details">{props.opened.Details}</p>
      </div>
    </div>
  );
};

export default OpenList;
