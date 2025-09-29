import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useSpring, animated } from "react-spring";

function AboutCard() {
  // Animation for education items
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    config: { tension: 200, friction: 20 },
  });

  const fadeInUp2 = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 400,
    config: { tension: 200, friction: 20 },
  });

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salma Ben Haj Khalifa</span> from{" "}
            <span className="purple">Sousse, Tunisia.</span>
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

          {/* Education Section */}
          <h4 className="purple mt-4">🎓 Education</h4>

          <animated.div style={fadeInUp} className="education-item">
            <p>
              <strong>Cycle Pré-ingénieur – ISSAT Sousse</strong> <br />
              2020 - 2022 <br />
              Focus: Mathématiques, Physique, Informatique de base
            </p>
          </animated.div>

          <animated.div style={fadeInUp2} className="education-item">
            <p>
              <strong>Cycle Ingénieur – Génie Logiciel, ISSAT Sousse</strong> <br />
              2022 - 2025 <br />
              Focus: Développement Web, IA, Bases de données, Architecture logicielle
            </p>
          </animated.div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
