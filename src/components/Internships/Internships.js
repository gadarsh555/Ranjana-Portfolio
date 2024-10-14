import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import InternshipCard from "./InternshipCard";
import { INTERNSHIPS } from "./internships.constants";

import "./internships.css";

function Internships() {
  const [internships] = useState(INTERNSHIPS);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Internships </strong>
        </h1>
        <div className="internshipsContainer">
          {internships?.map((internship) => {
            return <InternshipCard {...internship} />;
          })}
        </div>
      </Container>
    </Container>
  );
}

export default Internships;
