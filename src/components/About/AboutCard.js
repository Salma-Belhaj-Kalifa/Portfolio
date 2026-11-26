import React from "react";
import {
  BsGeoAlt,
  BsMortarboard,
  BsCodeSlash,
  BsStars,
  BsTranslate,
  BsHddNetwork,
  BsPeople,
  BsLightbulb,
} from "react-icons/bs";

const skills = [
  { icon: <BsCodeSlash />, label: "Full-Stack Web Development" },
  { icon: <BsStars />, label: "Generative AI & LLM Applications" },
  { icon: <BsTranslate />, label: "Natural Language Processing & Machine Learning" },
  { icon: <BsHddNetwork />, label: "Backend Development & REST APIs" },
  { icon: <BsPeople />, label: "Teamwork, Leadership & Community Engagement" },
  { icon: <BsLightbulb />, label: "Continuous Learning & Emerging Technologies" },
];

const styles = `
.ab-card{
  position:relative;padding:34px;border-radius:20px;text-align:left;
  background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.1);
  box-shadow:0 18px 44px rgba(0,0,0,.25);
}
.ab-meta{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px}
.ab-tag{
  display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;
  font-size:.82rem;color:#e4e4ee;
  background:rgba(199,112,240,.12);border:1px solid rgba(199,112,240,.3);
}
.ab-tag svg{color:#c770f0}

.ab-card p{
  margin:0 0 1px;font-size:1rem;line-height:1.85;color:#d6d6e4;text-align:left;
}
.ab-hl{color:#c770f0;font-weight:600}

.ab-skills-title{
  margin:30px 0 14px;font-size:1.05rem;font-weight:600;color:#fff;text-align:left;
}
.ab-skills{
  margin:0;padding:0;list-style:none;
  display:grid;grid-template-columns:repeat(2,1fr);gap:12px;
}
.ab-skill{
  display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;
  font-size:.9rem;line-height:1.35;color:#e4e4ee;text-align:left;
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  transition:border-color .3s ease,background .3s ease,transform .3s ease;
}
.ab-skill:hover{
  border-color:rgba(199,112,240,.5);background:rgba(199,112,240,.08);transform:translateY(-2px);
}
.ab-skill-icon{
  flex:none;display:grid;place-items:center;width:36px;height:36px;border-radius:10px;
  background:rgba(199,112,240,.16);color:#c770f0;font-size:1.05rem;
}

@media (max-width:576px){
  .ab-card{padding:22px}
  .ab-skills{grid-template-columns:1fr}
}
@media (prefers-reduced-motion:reduce){
  .ab-skill{transition:none}
  .ab-skill:hover{transform:none}
}
`;

function AboutCard() {
  return (
    <article className="ab-card">
      <style>{styles}</style>

      <div className="ab-meta">
        <span className="ab-tag">
          <BsGeoAlt /> Sousse, Tunisia
        </span>
        <span className="ab-tag">
          <BsMortarboard /> Software Engineer · ISSAT Sousse
        </span>
      </div>

      <p>
        Hi everyone! I am <span className="ab-hl">Salma Ben Haj Khalifa</span>{" "}
        from <span className="ab-hl">Sousse, Tunisia</span>. I am a recently
        graduated Software Engineer from ISSAT Sousse, passionate about
        designing and developing innovative software solutions. My expertise
        lies in full-stack web development, with a strong interest in{" "}
        <span className="ab-hl">
          Artificial Intelligence, Generative AI, Natural Language Processing,
          and Large Language Models (LLMs).
        </span>{" "}
        I enjoy combining software engineering and AI to build intelligent,
        practical applications that address real-world challenges.
      </p>

      <p>
        Throughout my academic journey and professional internships, I have
        gained hands-on experience developing web applications, backend
        services, and AI-powered solutions. My graduation project focused on
        building an AI-powered recruitment platform, where I explored candidate
        evaluation, semantic matching, and LLM-based analysis. Beyond technical
        work, my involvement in <span className="ab-hl">NATEG ISSATSO</span>{" "}
        helped me develop leadership, teamwork, communication, and
        organizational skills through workshops, events, and community
        initiatives.
      </p>

      <p>
        Beyond coding, I enjoy exploring emerging technologies, continuously
        learning, and experimenting with new ideas. I am particularly motivated
        by projects that combine{" "}
        <span className="ab-hl">
          software engineering, AI innovation, and meaningful real-world impact.
        </span>
      </p>

      <h3 className="ab-skills-title">What I do</h3>
      <ul className="ab-skills">
        {skills.map((s) => (
          <li className="ab-skill" key={s.label}>
            <span className="ab-skill-icon" aria-hidden="true">
              {s.icon}
            </span>
            {s.label}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default AboutCard;