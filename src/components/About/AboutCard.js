import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salma Ben Haj Khalifa</span> from <span className="purple">Sousse, Tunisia.</span>
            <br />
            I am currently a final-year software engineering student at ISSAT Sousse. I am passionate about web development and enjoy building interactive, user-friendly applications that make a positive impact. I am also particularly interested in integrating AI technologies into websites to create smarter, more dynamic user experiences.
          </p>
          
          <p style={{ textAlign: "justify" }}>
            I am actively involved in NATEG ISSATSO club, where I contribute to organizing events, workshops, and student activities. Being part of a vibrant community has helped me develop leadership, teamwork, and communication skills that complement my technical expertise.
          </p>

          <p style={{ textAlign: "justify" }}>
            Beyond coding, I love exploring new technologies, writing tech blogs, learning about UI/UX design, and discovering different cultures through travel. These experiences inspire me to create solutions that are not only functional but also intelligent, engaging, and meaningful.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Web & UI/UX Development
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Integration in Websites
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing Events & Workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
