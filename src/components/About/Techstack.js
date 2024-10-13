import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
} from "react-icons/di";
import { LuComputer } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { BiSolidLowVision } from "react-icons/bi";
import { GrVirtualMachine } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { TbPrompt } from "react-icons/tb";
import { SiPowerbi } from "react-icons/si";
import { GiWalkieTalkie } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

import './about.css';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="techstackName">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoPostgresql />
        <div className="techstackName">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaDatabase/>
      <div className="techstackName">Data Visualization</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LuComputer />
        <div className="techstackName">Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPowerbi/>
      <div className="techstackName">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LiaLanguageSolid/>
        <div className="techstackName">NLP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <BiSolidLowVision/>
      <div className="techstackName">Computer vision</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GrVirtualMachine/>
      <div className="techstackName">Deep Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaNetworkWired/>
      <div className="techstackName">CNN</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FcStatistics/>
      <div className="techstackName">Statistics</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbPrompt/>
      <div className="techstackName">Prompt
      Engineering</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GiWalkieTalkie/>
      <div className="techstackName">Communication Skills</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBookReader/>
      <div className="techstackName">Fast Learner</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiTeamFill/>
      <div className="techstackName">Leadership</div>
      </Col>
    </Row>
  );
}

export default Techstack;
