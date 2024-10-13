import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ranjana Gautam </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            <br />
            Currently I am working with{" "}
            <span className="purple"> Indian Overseas Bank</span>, a
            nationalized bank, since
            <span className="purple"> May 2013</span>. I started my journey as
            an
            <span className="purple">Assistant Manager</span>, where I served
            for seven years until <span className="purple">April 2020</span>. In
            <span className="purple">May 2020</span> , I was promoted to the
            role of <span className="purple">Bank Branch Manager</span> , a
            position I currently hold. My experience in the banking sector spans
            over a decade, during which I have taken on various leadership and
            managerial responsibilities.
            <br />
            <br />
            Over the past two years, I have also developed strong expertise in{" "}
            <span className="purple">
              Data Science, Machine Learning, Deep Learning, Natural Language
              Processing (NLP), SQL, Time Series, Computer Vision, and Power BI.
            </span>{" "}
            Through various challenging internships and projects, I have honed
            these skills and continue to grow in this field. My goal is to
            leverage my financial background alongside these cutting-edge
            technologies to solve complex business problems and drive
            data-driven solutions.
            <br />
            <br />
            {/*  Apart from Machine Learning, some other activities that I love to
            do! */}
          </p>
          {/*  <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to Create Impactful Solutions That Transform the Future!"{" "}
          </p>
          <footer className="blockquote-footer">Ranjana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
