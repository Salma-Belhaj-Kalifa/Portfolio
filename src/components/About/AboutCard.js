import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Intro Paragraphs */}
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Salma Ben Haj Khalifa</span> from{" "}
            <span className="purple">Sousse, Tunisia.</span>
            <br />
            I am currently a final-year software engineering student at ISSAT
            Sousse. I am passionate about web development and enjoy building
            interactive, user-friendly applications that make a positive impact.
            I am particularly interested in integrating{" "}
            <b className="purple">AI, Machine Learning, and Computer Vision</b>{" "}
            technologies into websites and applications to create smarter, more
            dynamic, and intelligent user experiences.
          </p>

          <p style={{ textAlign: "justify" }}>
            I am actively involved in NATEG ISSATSO club, where I contribute to
            organizing events, workshops, and student activities. Being part of
            a vibrant community has helped me develop leadership, teamwork, and
            communication skills that complement my technical expertise.
          </p>

          <p style={{ textAlign: "justify" }}>
            Beyond coding, I enjoy exploring emerging technologies and deepening
            my knowledge in UI/UX design. These pursuits inspire me to develop
            solutions that are not only functional but also intelligent,
            engaging, and impactful.
          </p>

          {/* Skills List */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web & UI/UX Development
            </li>
            <li className="about-activity">
              <ImPointRight /> AI & Machine Learning Integration
            </li>
            <li className="about-activity">
              <ImPointRight /> Computer Vision Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing Events & Workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Emerging Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
