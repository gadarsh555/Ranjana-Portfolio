import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import _capitalize from "lodash/capitalize";

import "./education.css";

const EducationCard = ({ course, institute, timeline, description, link }) => {
  return (
    <div className="educationCard project-card-view">
      <div className="educationSection1">
        <div className="educationLeftSection">
          <div className="educationCourse">{course}</div>
          {link ? (
            <a className="linkEducation" href={link} target="_blank">
              Link &nbsp;
              <FaExternalLinkAlt />{" "}
            </a>
          ) : null}
        </div>
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
