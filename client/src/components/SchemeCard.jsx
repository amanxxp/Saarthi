import React from "react";
import "./schemecard.css";
const SchemeCard = ({ scheme }) => {
  return (
    <div className="hover:cursor-pointer">
      <div className="card">
        <div className="title">{scheme.Name}</div>
        <div className="des">
          {scheme.details.split(" ").slice(0, 14).join(" ")}...
        </div>
        <div className="bottom">
          <div className="min">📍{scheme.State} </div>
          <div className="icon"><a href={scheme.link} target="_blank">Apply</a></div>
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
