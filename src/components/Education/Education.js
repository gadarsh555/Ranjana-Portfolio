import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import EducationCard from "./EducationCard";

import { EDUCATION } from "./education.constants";

function Education() {
  const [educations] = useState(EDUCATION);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education </strong>
        </h1>
        <div>
          {educations?.map((education) => {
            return <EducationCard {...education} />;
          })}
        </div>
      </Container>
    </Container>
  );
}

export default Education;
