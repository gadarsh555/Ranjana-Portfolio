import React from "react";
import _capitalize from "lodash/capitalize";

import "./internships.css";

const InternshipCard = ({ name, company, timeline, description }) => {
  return (
    <div className="internshipCard project-card-view">
      <div className="section1">
        <div className="name">{name}</div>
        <div className="timeline">{_capitalize(timeline)}</div>
      </div>
      <div className="section2">
        <div className="company">{company}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default InternshipCard;
