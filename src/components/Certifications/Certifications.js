import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import CertificationCard from "./CertificationCard";
import { CERTIFICATIONS } from "./certifications.constants";

import "./certifications.css";

function Certifications() {
  const [certifications] = useState(CERTIFICATIONS);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <div className="certificationsContainer">
          {certifications?.map((certification) => {
            return <CertificationCard {...certification} />;
          })}
        </div>
      </Container>
    </Container>
  );
}

export default Certifications;
