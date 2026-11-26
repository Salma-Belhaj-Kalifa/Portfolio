import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsCodeSlash, BsDatabase, BsStars, BsEye } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import myImg from "../../Assets/home-main.svg";

const skillGroups = [
  {
    title: "Web Development",
    icon: <BsCodeSlash />,
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "Django",
      "Symfony",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "AI & LLM",
    icon: <BsStars />,
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "LangChain",
      "OpenAI API",
      "Gemini API",
      "Groq API",
      "Hugging Face",
      "Transformers",
      "Sentence Transformers",
      "Embeddings",
      "NLP",
      "Machine Learning",
      "spaCy",
    ],
  },
  {
    title: "Computer Vision",
    icon: <BsEye />,
    items: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Tesseract OCR",
],
  },
  {
    title: "Databases & Search Technologies",
    icon: <BsDatabase />,
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Elasticsearch",
      "SQL",
      "Database Design",
      "Data Modeling",
    ],
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Salma-Belhaj-Kalifa",
    icon: <AiFillGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salma-belhaj-kalifa-b3b42623b/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/salma.belhaj.kalifa",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/salmaa_bhk/",
    icon: <AiFillInstagram />,
  },
];

const styles = `
.h2-title{
  margin:0 0 26px;text-align:left;font-size:clamp(1.9rem,4vw,2.6rem);
  font-weight:700;line-height:1.2;color:#fff;
}
.h2-title span{color:#c770f0}

.h2-body p{
  margin:0 0 18px;max-width:68ch;text-align:left;
  font-size:1.02rem;line-height:1.85;color:#d6d6e4;
}
.h2-hl{color:#c770f0;font-weight:600}

/* Compétences : cartes compactes */
.h2-skills-title{
  margin:48px 0 22px;text-align:center;font-size:1.7rem;font-weight:700;color:#fff;
}
.h2-skill-card{
  height:100%;padding:16px 18px;border-radius:14px;text-align:left;
  background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.1);
  transition:border-color .3s ease,box-shadow .3s ease;
}
.h2-skill-card:hover{
  border-color:rgba(199,112,240,.5);
  box-shadow:0 10px 26px rgba(110,60,220,.16);
}
.h2-skill-head{
  display:flex;align-items:center;gap:10px;margin-bottom:12px;padding-bottom:10px;
  border-bottom:1px solid rgba(255,255,255,.1);
}
.h2-skill-icon{
  display:grid;place-items:center;width:32px;height:32px;flex:none;border-radius:9px;
  background:rgba(199,112,240,.16);color:#c770f0;font-size:1rem;
}
.h2-skill-head h3{margin:0;font-size:1rem;font-weight:600;color:#fff}
.h2-stack{display:flex;flex-wrap:wrap;gap:5px}
.h2-chip{
  padding:2px 9px;border-radius:7px;font-size:.74rem;line-height:1.55;color:#e4e4ee;
  background:rgba(199,112,240,.1);border:1px solid rgba(199,112,240,.25);
}

.h2-avatar{display:grid;place-items:center;padding:10px}

/* Réseaux sociaux */
.h2-social{
  margin-top:48px;padding:36px 24px;text-align:center;border-radius:20px;
  background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.1);
}
.h2-social h2{margin:0 0 8px;font-size:1.9rem;font-weight:700;color:#fff}
.h2-social p{margin:0 0 26px;font-size:1.05rem;color:#b9b9cc}
.h2-social-links{
  display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin:0;padding:0;list-style:none;
}
.h2-social-link{
  display:inline-flex;align-items:center;gap:10px;padding:11px 22px;border-radius:12px;
  font-size:.95rem;font-weight:500;color:#fff;text-decoration:none;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);
  transition:transform .3s ease,background .3s ease,border-color .3s ease,color .3s ease;
}
.h2-social-link svg{font-size:1.2rem;color:#c770f0;transition:color .3s ease}
.h2-social-link:hover{
  transform:translateY(-3px);background:#c770f0;border-color:#c770f0;color:#1a0b24;
}
.h2-social-link:hover svg{color:#1a0b24}
.h2-social-link:focus-visible{outline:2px solid #c770f0;outline-offset:3px}

@media (max-width:767px){
  .h2-avatar{margin-top:30px}
  .h2-social{padding:30px 16px}
}
@media (prefers-reduced-motion:reduce){
  .h2-skill-card,.h2-social-link,.h2-social-link svg{transition:none}
  .h2-social-link:hover{transform:none}
}
`;

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <style>{styles}</style>

      <Container>
        <Row className="align-items-center g-4">
          <Col md={8} className="h2-body">
            <h1 className="h2-title">
              LET ME <span>INTRODUCE</span> MYSELF
            </h1>

            <p>
              I am a recently graduated{" "}
              <span className="h2-hl">Software Engineer</span> passionate about
              building innovative, intelligent, and impactful software
              solutions. My background combines full-stack web development with
              a strong interest in{" "}
              <span className="h2-hl">Artificial Intelligence</span>,
              particularly Generative AI, Natural Language Processing, and
              Large Language Models (LLMs).
            </p>

            <p>
              I have hands-on experience with technologies such as{" "}
              <span className="h2-hl">
                Python, Java, PHP, JavaScript and TypeScript
              </span>
              , developing backend services, REST APIs, and modern web
              applications. I enjoy turning ideas into practical solutions with
              a focus on performance, usability, and scalability.
            </p>

            <p>
              My main areas of interest include{" "}
              <span className="h2-hl">
                Full-Stack Development, Generative AI, NLP, Machine Learning,
                AI-powered Applications, and Intelligent Automation
              </span>
              . I am particularly interested in exploring how AI can enhance
              software products and solve real-world problems.
            </p>

            <p>
              Whenever possible, I work with{" "}
              <span className="h2-hl">FastAPI, Spring Boot, and Node.js</span>,
              alongside modern frontend technologies such as{" "}
              <span className="h2-hl">React.js and Next.js</span>. I also enjoy
              experimenting with LLMs, AI APIs, embeddings, and NLP tools to
              build smarter, more interactive applications.
            </p>
          </Col>

          <Col md={4} className="h2-avatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <h2 className="h2-skills-title">
          Technologies I <span className="h2-hl">work with</span>
        </h2>
        <Row className="g-3">
          {skillGroups.map((g) => (
            <Col key={g.title} xs={12} lg={6}>
              <div className="h2-skill-card">
                <div className="h2-skill-head">
                  <span className="h2-skill-icon" aria-hidden="true">
                    {g.icon}
                  </span>
                  <h3>{g.title}</h3>
                </div>
                <div className="h2-stack">
                  {g.items.map((t) => (
                    <span className="h2-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={12}>
            <div className="h2-social">
              <h2>FIND ME ON</h2>
              <p>
                Feel free to <span className="h2-hl">connect</span> with me
              </p>
              <ul className="h2-social-links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      className="h2-social-link"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                    >
                      {s.icon} {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;