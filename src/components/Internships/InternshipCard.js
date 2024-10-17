import React from "react";
import _capitalize from "lodash/capitalize";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./internships.css";

const InternshipCard = ({ name, company, timeline, description, link }) => {
  return (
    <div className="internshipCard project-card-view">
      <div className="internshipSection1">
        <div className="internshipName">{name}</div>
        <div className="internshipTimeline">{_capitalize(timeline)}</div>
      </div>
      <div className="internshipSection2">
        <div className="internshipleftSection">
          <div className="internshipCompany">{company}</div>
          {link ? (
            <a className="linkInternship" href={link} target="_blank">
              Link &nbsp;
              <FaExternalLinkAlt />{" "}
            </a>
          ) : null}
        </div>
        <div className="internshipDescription">{description}</div>
      </div>
    </div>
  );
};

export default InternshipCard;
