import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import AchievementCard from "./AchievementCard";
import { ACHIEVEMENTS } from "./achievements.constants";

function Achievements() {
  const [achievements] = useState(ACHIEVEMENTS);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Achievements </strong>
        </h1>
        <div>
          {achievements?.map((achievement) => {
            return <AchievementCard {...achievement} />;
          })}
        </div>
      </Container>
    </Container>
  );
}

export default Achievements;
