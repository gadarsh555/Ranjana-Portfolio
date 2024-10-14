import React from "react";
import _capitalize from "lodash/capitalize";

import "./education.css";

const EducationCard = ({ course, institute, timeline, description }) => {
  return (
    <div className="educationCard project-card-view">
      <div className="section1">
        <div className="course">{course}</div>
        <div className="timeline">{_capitalize(timeline)}</div>
      </div>
      <div className="section2">
        <div className="institute">{institute}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default EducationCard;
