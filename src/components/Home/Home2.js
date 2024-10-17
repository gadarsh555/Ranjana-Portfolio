import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import working from "../../Assets/working.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import "./home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Experienced Data Science professional having{" "}
              <b className="purple">&nbsp;11+ years&nbsp;</b> of banking career
              including &nbsp;<b className="purple">2</b>&nbsp; years as{" "}
              <b className="purple">Data scientist</b>. During 2-year as a data
              scientist, I honed my skills in &nbsp;
              <b className="purple">
                Python programming language, Machine Learning, Deep Learning,
                Natural Language Processing, SQL, NLP, Time series, Computer
                vision and Power Bi
              </b>
              . &nbsp;
              <p className="home2Intro">
                Looking to combine my <b className="purple">finance sector</b>{" "}
                expertise with these cutting-edge skills to solve complex
                business problems and contribute to the forefront of data-driven
                solutions.
              </p>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={working} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ranj10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ranjana-gautam-5398b0138/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
