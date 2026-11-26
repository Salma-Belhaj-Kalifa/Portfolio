import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub, BsStars, BsEye, BsCodeSlash } from "react-icons/bs";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvParse from "../../Assets/Projects/cvparse.PNG";
import smartAssess from "../../Assets/Projects/acceuil.png";
import interview from "../../Assets/Projects/interview.PNG";
import posti from "../../Assets/Projects/Posti.PNG";
import issatso from "../../Assets/Projects/issatso.PNG";
import darDart from "../../Assets/Projects/dardart.PNG";
import color from "../../Assets/Projects/color.PNG";
import volume from "../../Assets/Projects/volume.PNG";

// ⚠️ Remplacez par le lien exact du dépôt GitHub de SmartAssess
const SMARTASSESS_REPO = "https://github.com/Salma-Belhaj-Kalifa/Proxym-smartAssess";

const pageStyles = `
.pf-section{position:relative}

/* Les particules restent en fond et ne captent plus les clics */
.pf-particles{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.pf-particles,.pf-particles *{pointer-events:none !important}

/* Tout le contenu passe au-dessus des particules */
.pf-content{position:relative;z-index:2}

.pf-bar{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin:0 auto 48px}
.pf-pill{
  display:inline-flex;align-items:center;gap:8px;padding:9px 20px;border-radius:999px;
  border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);color:#b9b9cc;
  font-size:.92rem;cursor:pointer;
  transition:background .25s ease,color .25s ease,border-color .25s ease,transform .25s ease;
}
.pf-pill:hover{color:#fff;border-color:rgba(199,112,240,.55);transform:translateY(-1px)}
.pf-pill.is-active{color:#fff;background:rgba(199,112,240,.2);border-color:#c770f0}
.pf-pill:focus-visible{outline:2px solid #c770f0;outline-offset:3px}

.pcat{margin-bottom:56px;animation:pcatIn .45s ease both}
@keyframes pcatIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

.pcat-head{
  display:flex;align-items:center;gap:14px;
  margin-bottom:26px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,.1);
}
.pcat-icon{
  display:grid;place-items:center;width:44px;height:44px;flex:none;border-radius:12px;
  background:rgba(199,112,240,.16);color:#c770f0;font-size:1.3rem;
}
.pcat-title{margin:0;font-size:1.5rem;font-weight:600;color:#fff;text-align:left}
.pcat-sub{margin:2px 0 0;max-width:62ch;font-size:.93rem;color:#a9a9bd;text-align:left}

.pcta{
  margin-top:8px;padding:36px 20px;text-align:center;border-radius:16px;
  border:1px dashed rgba(199,112,240,.45);background:rgba(199,112,240,.1);
}
.pcta h3{margin:0 0 16px;color:#fff;font-size:1.3rem}

@media (prefers-reduced-motion:reduce){
  .pcat{animation:none}
  .pf-pill{transition:none}
  .pf-pill:hover{transform:none}
}
`;

const projectCategories = [
  {
    id: "ai",
    label: "AI & LLM",
    title: "AI & LLM Applications",
    subtitle:
      "Building intelligent applications with Generative AI, NLP, and Large Language Models.",
    icon: <BsStars />,
    projects: [
      {
        title: "SmartAssess",
        imgPath: smartAssess,
        featured: true,
        description:
          "AI-powered recruitment and candidate preselection platform, built as my final-year engineering project.",
        features: [
          "Automated CV analysis and evaluation",
          "Semantic candidate-job matching",
          "AI-generated technical assessments",
        ],
        tech: [
          "Spring Boot",
          "FastAPI",
          "React",
          "Llama 3.3",
          "Java 21",
          "PostgreSQL",
          "Elasticsearch",
          "Sentence Transformers",
          "JWT",
        ],
        ghLink: SMARTASSESS_REPO,
      },
      {
        title: "Interview Prep AI",
        imgPath: interview,
        description:
          "Interview preparation platform helping students and job seekers practice with role-specific questions.",
        features: [
          "AI-generated interview questions",
          "Role-specific preparation",
          "Interactive practice experience",
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/interview-prep",
      },
    ],
  },
  {
    id: "cv",
    label: "Computer Vision",
    title: "Computer Vision",
    subtitle:
      "Exploring real-time image processing, object tracking, and intelligent human-computer interaction.",
    icon: <BsEye />,
    projects: [
      {
        title: "Real-Time Color Detection",
        imgPath: color,
        description:
          "Detects and identifies colors in real time from a webcam stream, with interactive visual feedback.",
        features: [
          "Real-time webcam processing",
          "Color identification and recognition",
          "Interactive visualization",
        ],
        tech: ["Python", "OpenCV", "Image Processing"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/ColorDetection",
      },
      {
        title: "CV Parser & Job Matching",
        // Ajoutez une capture : import cvParse from "../../Assets/Projects/cvparse.PNG";
        // puis décommentez la ligne suivante
        imgPath: cvParse,
        description:
          "Analyzes the content of a CV and computes a matching score against a given job post.",
        features: [
          "Automated CV content analysis",
          "Matching score against a job post",
        ],
        tech: ["Python", "Streamlit"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/cv_parse",
      },
      {
        title: "Hand Gesture Volume Control",
        imgPath: volume,
        description:
          "Recognizes hand gestures to control the system volume in real time, without any physical contact.",
        features: [
          "Real-time hand tracking",
          "Gesture recognition",
          "Touchless volume control",
        ],
        tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        ghLink:
          "https://github.com/Salma-Belhaj-Kalifa/hand-gesture-volume-control",
      },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    title: "Web Development",
    subtitle:
      "Designing and developing responsive, interactive, and scalable web applications.",
    icon: <BsCodeSlash />,
    projects: [
      {
        title: "Posti",
        imgPath: posti,
        description:
          "Full-stack social network where users create posts, like, comment and engage with a dynamic community.",
        features: [
          "User authentication",
          "Dynamic news feed",
          "Posts, comments, likes and CRUD",
        ],
        tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/posti",
      },
      {
        title: "ISSATSO PFE Management",
        imgPath: issatso,
        description:
          "Web module simplifying Final Year Project management at ISSAT Sousse for students and professors.",
        features: [
          "Project scheduling and management",
          "Student and professor workflows",
          "Presentation tracking",
        ],
        tech: ["React.js", "Django", "Tailwind CSS", "Agile Scrum"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/pfe-issatso",
      },
      {
        title: "Dar D'ART",
        imgPath: darDart,
        description:
          "Desktop and web application for guesthouse management with bookings, customers and real-time chat.",
        features: [
          "Booking management",
          "Customer administration",
          "Real-time chat functionality",
        ],
        tech: ["Java Swing", "WebSockets", "MySQL"],
        ghLink: "https://github.com/Salma-Belhaj-Kalifa/Dar-d-art",
      },
    ],
  },
];

function Projects() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? projectCategories
      : projectCategories.filter((c) => c.id === active);

  return (
    <Container fluid className="project-section pf-section">
      <style>{pageStyles}</style>

      <div className="pf-particles" aria-hidden="true">
        <Particle />
      </div>

      <Container className="pf-content">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p
          style={{
            color: "#c5c5d2",
            textAlign: "center",
            maxWidth: "60ch",
            margin: "0 auto 36px",
            fontSize: "1.05rem",
          }}
        >
          Exploring ideas and building solutions across software engineering,
          artificial intelligence, and computer vision.
        </p>

        <div className="pf-bar" role="group" aria-label="Filter projects">
          <button
            type="button"
            aria-pressed={active === "all"}
            className={`pf-pill${active === "all" ? " is-active" : ""}`}
            onClick={() => setActive("all")}
          >
            All
          </button>
          {projectCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={active === c.id}
              className={`pf-pill${active === c.id ? " is-active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {visible.map((category) => (
          <section key={`${category.id}-${active}`} className="pcat">
            <div className="pcat-head">
              <span className="pcat-icon">{category.icon}</span>
              <div>
                <h2 className="pcat-title">{category.title}</h2>
                <p className="pcat-sub">{category.subtitle}</p>
              </div>
            </div>

            <Row className="g-4 justify-content-center">
              {category.projects.map((project) => (
                <Col key={project.title} xs={12} md={6} lg={4}>
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    category={category.label}
                    description={project.description}
                    features={project.features}
                    tech={project.tech}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink}
                    isBlog={false}
                    featured={project.featured}
                  />
                </Col>
              ))}
            </Row>
          </section>
        ))}

        <div className="pcta">
          <h3>Want to see more of my work?</h3>
          <Button
            variant="primary"
            href="https://github.com/Salma-Belhaj-Kalifa"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> &nbsp; Explore My GitHub
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;