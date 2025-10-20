import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "./AboutCard.css";

function About() {
  const educationData = [
    {
      badge: "Engineering",
      year: "2022 - 2026",
      title: "Software Engineering Cycle – ISSAT Sousse",
      focus:
        "Focus: Web Development, AI, Machine Learning, Computer Vision, Databases, Software Architecture",
    },
    {
      badge: "Pre-Engineering",
      year: "2020 - 2022",
      title: "Pre-Engineering Cycle – ISSAT Sousse",
      focus: "Focus: Mathematics, Physics, Basic Computer Science",
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Education Section */}
        <div className="education-section">
          <h1 className="project-heading">
             <strong className="purple">Education</strong>
          </h1>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="education-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="education-badge">{edu.badge}</div>
              <div className="education-year">{edu.year}</div>
              <div className="education-details">
                <strong>{edu.title}</strong>
                <p>{edu.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
