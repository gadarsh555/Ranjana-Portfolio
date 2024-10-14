import React from "react";
import _capitalize from "lodash/capitalize";

import "./internships.css";

const InternshipCard = ({ name, company, timeline, description }) => {
  return (
    <div className="internshipCard project-card-view">
      <div className="internshipSection1">
        <div className="internshipName">{name}</div>
        <div className="internshipTimeline">{_capitalize(timeline)}</div>
      </div>
      <div className="internshipSection2">
        <div className="internshipCompany">{company}</div>
        <div className="internshipDescription">{description}</div>
      </div>
    </div>
  );
};

export default InternshipCard;
