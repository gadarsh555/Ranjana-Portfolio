import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { DiDigitalOcean } from "react-icons/di";
import { SiPlotly } from "react-icons/si";
import { FaCloud } from "react-icons/fa";

import "./about.css";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="techstackName">Numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="techstackName">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy />
        <div className="techstackName">Scipy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDigitalOcean />
        <div className="techstackName">Seaborn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <div className="techstackName">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="techstackName">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <div className="techstackName">Pytorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <div className="techstackName">Keras</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
        <div className="techstackName">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <div className="techstackName">PowerBi</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
        <div className="techstackName">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <div className="techstackName">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCloud />
        <div className="techstackName">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="techstackName">MySql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
        <div className="techstackName">GIT</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
