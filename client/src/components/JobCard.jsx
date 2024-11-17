import React from "react";
import "./jobcard.css";
const JobCard = ({ job }) => {
  return (
    <div>
      <div className="card">
        <div className="type">
          <div className="title">{job.title}</div>
          <div className="dep">{job.department}</div>
        </div>
        <div className="desp">{job.description}</div>
        <div className="type2">
          <div className="loc">{job.location}</div>
          <div>{job.contractType}</div>
        </div>
        <div className="jon">Join</div>
      </div>
    </div>
  );
};

export default JobCard;
