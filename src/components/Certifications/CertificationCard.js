import React from "react";
import { FaAward } from "react-icons/fa6";
import _capitalize from "lodash/capitalize";

import "./certifications.css";

const CertificationCard = ({ description }) => {
  return (
    <div className="certificationCard project-card-view">
      <div className="certificationSection1">
        <FaAward size={30} />
        <div className="certificationDescription">{description}</div>
      </div>
    </div>
  );
};

export default CertificationCard;
