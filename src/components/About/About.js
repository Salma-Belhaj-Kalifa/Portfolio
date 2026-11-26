import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsMortarboardFill, BsBook } from "react-icons/bs";

import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

/* `status` is optional: it shows a small live indicator on the card.
   `focus` is now an array so each topic becomes its own chip. */
const educationData = [
  {
    badge: "Engineering Cycle",
    year: "2023 - 2026",
    title: "Software Engineering Cycle – ISSAT Sousse",
    icon: <BsMortarboardFill />,
    focus: [
      "Web Development",
      "AI",
      "Machine Learning",
      "Computer Vision",
      "Databases",
      "Software Architecture",
    ],
  },
  {
    badge: "Pre-Engineering Cycle",
    year: "2021 - 2023",
    title: "Pre-Engineering Cycle – ISSAT Sousse",
    icon: <BsBook />,
    focus: ["Mathematics", "Physics", "Basic Computer Science"],
  },
];

const styles = `
.ab-section{position:relative}

/* Particules en fond, sans capter les clics */
.ab-particles{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.ab-particles,.ab-particles *{pointer-events:none !important}
.ab-content{position:relative;z-index:2}

/* Titres de section */
.ab-heading{
  margin:70px 0 16px;text-align:center;font-size:2.1rem;font-weight:600;color:#fff;
}

/* ---------- Education timeline ---------- */
.edu-timeline{
  position:relative;max-width:760px;margin:0 auto;padding-left:44px;
}

/* The spine: draws itself once on load, then stays */
.edu-timeline::before{
  content:"";position:absolute;left:15px;top:8px;bottom:8px;width:2px;
  background:linear-gradient(to bottom,#c770f0,rgba(199,112,240,.1));
  transform-origin:top;
  animation:eduLine 1.1s cubic-bezier(.2,.7,.2,1) both;
}

.edu-item{
  position:relative;margin-bottom:26px;
  animation:eduIn .6s ease both;
}
.edu-item:nth-child(1){animation-delay:.15s}
.edu-item:nth-child(2){animation-delay:.45s}
.edu-item:last-child{margin-bottom:0}

.edu-dot{
  position:absolute;left:-44px;top:18px;width:32px;height:32px;border-radius:50%;
  display:grid;place-items:center;font-size:.9rem;color:#1a0b24;background:#c770f0;
  box-shadow:0 0 0 6px rgba(199,112,240,.18);
}
/* Only the ongoing step pulses, so it reads as "you are here" */
.edu-item.is-current .edu-dot{animation:eduPulse 2.4s ease-in-out infinite}
.edu-item:not(.is-current) .edu-dot{
  background:#2a1838;color:#c770f0;box-shadow:0 0 0 6px rgba(199,112,240,.08);
  border:1px solid rgba(199,112,240,.45);
}

.edu-card{
  padding:22px 24px;border-radius:16px;text-align:left;color:#fff;
  background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.1);
  transition:transform .35s cubic-bezier(.2,.7,.2,1),border-color .35s ease,box-shadow .35s ease;
}
.edu-card:hover{
  transform:translateX(6px);border-color:rgba(199,112,240,.5);
  box-shadow:0 14px 34px rgba(110,60,220,.2);
}
.edu-item.is-current .edu-card{border-color:rgba(199,112,240,.35)}

.edu-top{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
.edu-badges{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.edu-badge{
  padding:4px 14px;border-radius:999px;font-size:.8rem;font-weight:500;color:#e4e4ee;
  background:rgba(199,112,240,.14);border:1px solid rgba(199,112,240,.35);
}
.edu-status{
  display:inline-flex;align-items:center;gap:6px;
  font-size:.78rem;color:#b9b9cc;
}
.edu-status::before{
  content:"";width:7px;height:7px;border-radius:50%;background:#5ee6a8;
  box-shadow:0 0 0 0 rgba(94,230,168,.6);animation:eduLive 2s ease-out infinite;
}
.edu-year{font-size:1.15rem;font-weight:600;color:#c770f0;white-space:nowrap}
.edu-title{display:block;margin-bottom:14px;font-size:1.05rem;color:#fff}

/* Focus topics as chips instead of one long sentence */
.edu-focus{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}
.edu-chip{
  padding:4px 12px;border-radius:8px;font-size:.82rem;color:#d6d6e6;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);
  transition:border-color .25s ease,color .25s ease,background .25s ease;
}
.edu-card:hover .edu-chip{
  border-color:rgba(199,112,240,.3);background:rgba(199,112,240,.08);color:#fff;
}

@keyframes eduIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes eduLine{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes eduPulse{
  0%,100%{box-shadow:0 0 0 6px rgba(199,112,240,.18)}
  50%{box-shadow:0 0 0 11px rgba(199,112,240,.05)}
}
@keyframes eduLive{
  0%{box-shadow:0 0 0 0 rgba(94,230,168,.55)}
  70%,100%{box-shadow:0 0 0 7px rgba(94,230,168,0)}
}

@media (max-width:768px){
  .ab-heading{margin-top:50px;font-size:1.8rem}
  .edu-timeline{padding-left:38px}
  .edu-dot{left:-38px}
  .edu-card{padding:18px}
}
@media (prefers-reduced-motion:reduce){
  .edu-timeline::before,.edu-item,.edu-item.is-current .edu-dot,.edu-status::before{animation:none}
  .edu-card,.edu-chip{transition:none}
  .edu-card:hover{transform:none}
}
`;

function About() {
  return (
    <Container fluid className="about-section ab-section">
      <style>{styles}</style>

      <div className="ab-particles" aria-hidden="true">
        <Particle />
      </div>

      <Container className="ab-content">
        <Row className="justify-content-center" style={{ padding: "10px" }}>
          <Col lg={10} xl={9} style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        {/* Education */}
        <h2 className="ab-heading">
          <strong className="purple">Education</strong>
        </h2>

        <div className="edu-timeline">
          {educationData.map((edu) => (
            <div
              className={`edu-item${edu.status ? " is-current" : ""}`}
              key={edu.title}
            >
              <span className="edu-dot" aria-hidden="true">
                {edu.icon}
              </span>
              <div className="edu-card">
                <div className="edu-top">
                  <div className="edu-badges">
                    <span className="edu-badge">{edu.badge}</span>
                    {edu.status && <span className="edu-status">{edu.status}</span>}
                  </div>
                  <span className="edu-year">{edu.year}</span>
                </div>
                <strong className="edu-title">{edu.title}</strong>
                <ul className="edu-focus" aria-label="Focus areas">
                  {edu.focus.map((topic) => (
                    <li className="edu-chip" key={topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="ab-heading">
          Professional <strong className="purple">Skillset</strong>
        </h2>
        <Techstack />

        <h2 className="ab-heading">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;