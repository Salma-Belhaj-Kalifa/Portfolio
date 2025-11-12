import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/dardart.PNG";
import editor from "../../Assets/Projects/issatso.PNG";
import chatify from "../../Assets/Projects/interview.PNG";
import bitsOfCode from "../../Assets/Projects/Posti.PNG";
import volume from "../../Assets/Projects/volume.PNG"; 
import color from "../../Assets/Projects/color.PNG"; 


function Projects() {
  const imgStyle = { height: "200px", width: "cover" }; // uniform image size

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Interview Prep AI"
              description={`A full-stack platform that helps students and job seekers prepare for interviews. 
It uses AI to generate role-specific questions with clear explanations and offers an interactive experience for practice.

Key aspects: AI integration, MERN stack, user-friendly design, backend API optimization`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/interview-prep"
              imgStyle={imgStyle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Posti"
              description={`A MERN-stack social platform that enables users to create posts, interact through comments and likes, and engage in a community-driven environment. Built with React and Tailwind CSS for a responsive and modern UI, and MongoDB + Express.js for scalable backend functionality.

Key aspects: authentication, Mern Stack, CRUD operations, dynamic feeds, and clean UI/UX implementation`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/posti"
              imgStyle={imgStyle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ISSATSO PFEs Management"
              description={`A web module integrated into our institute’s platform to manage Final Year Projects. It allows students and professors to plan, schedule, and track project presentations easily.

Key aspects: React.js, Django, Tailwind CSS, project scheduling and management, Scrum method`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/pfe-issatso"
              imgStyle={imgStyle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dar D'ART"
              description={`A desktop and web application for managing guest houses. It includes features like booking appointments, managing customers, and real-time chat rooms for communication.

Key aspects: Java Swing, WebSockets, MySQL, guesthouse management`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/Dar-d-art"
              imgStyle={imgStyle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Color Detection"
              description={`A real-time computer vision application that detects and identifies colors using a webcam feed. 
Key aspects: Python, OpenCV, real-time color recognition, interactive visualization.`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/ColorDetection"
              imgStyle={imgStyle}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volume}
              isBlog={false}
              title="Hand Gesture Volume Control"
              description={`An AI-powered system that recognizes hand gestures in real time to control system volume. 
Key aspects: Python, OpenCV, MediaPipe, PyAutoGUI, real-time gesture recognition.`}
              ghLink="https://github.com/Salma-Belhaj-Kalifa/hand-gesture-volume-control"
              imgStyle={imgStyle}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
