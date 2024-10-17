import React from "react";
import { FaAward } from "react-icons/fa6";
import _capitalize from "lodash/capitalize";
import { FaExternalLinkAlt } from "react-icons/fa";

import "./certifications.css";

const CertificationCard = ({ description, link }) => {
  return (
    <div className="certificationCard project-card-view">
      <div className="certificationSection1">
        <FaAward size={30} />
        <div className="certificationDescription">{description}</div>
      </div>
      {link ? (
        <a className="linkCertification" href={link} target="_blank">
          Link &nbsp;
          <FaExternalLinkAlt />{" "}
        </a>
      ) : null}
    </div>
  );
};

export default CertificationCard;
