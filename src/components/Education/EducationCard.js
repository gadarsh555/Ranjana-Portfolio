import React from "react";
import _capitalize from "lodash/capitalize";

import "./education.css";

const EducationCard = ({ course, institute, timeline, description }) => {
  return (
    <div className="educationCard project-card-view">
      <div className="educationSection1">
        <div className="educationCourse">{course}</div>
        <div className="educationTimeline">{_capitalize(timeline)}</div>
      </div>
      <div className="educationSection2">
        <div className="educationInstitute">{institute}</div>
        <div className="educationDescription">{description}</div>
      </div>
    </div>
  );
};

export default EducationCard;
