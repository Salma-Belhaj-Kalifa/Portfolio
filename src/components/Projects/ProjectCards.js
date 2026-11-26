import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStarFill, BsFileEarmarkTextFill } from "react-icons/bs";

const MAX_FEATURES = 3;

const cardStyles = `
.pcard{
  --mx:50%; --my:0%;
  position:relative;display:flex;flex-direction:column;height:100%;
  padding:10px;border-radius:20px;
  background:linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.1);
  transition:transform .4s cubic-bezier(.2,.7,.2,1),border-color .4s ease,box-shadow .4s ease;
}
/* halo de lumière qui suit la souris */
.pcard::before{
  content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;
  background:radial-gradient(380px circle at var(--mx) var(--my),rgba(199,112,240,.16),transparent 60%);
  opacity:0;transition:opacity .4s ease;
}
.pcard:hover,.pcard:focus-within{
  transform:translateY(-6px);
  border-color:rgba(199,112,240,.55);
  box-shadow:0 18px 40px rgba(110,60,220,.22);
}
.pcard:hover::before,.pcard:focus-within::before{opacity:1}
.pcard--featured{border-color:rgba(199,112,240,.5)}

.pcard-media{
  position:relative;flex:none;aspect-ratio:16/10;overflow:hidden;
  border-radius:13px;background:#14121f;
}
.pcard-media img{
  width:100%;height:100%;object-fit:cover;object-position:top;display:block;
  transition:transform .7s cubic-bezier(.2,.7,.2,1);
}
.pcard:hover .pcard-media img{transform:scale(1.06)}
.pcard-fallback{
  width:100%;height:100%;display:grid;place-items:center;font-size:3rem;
  color:rgba(199,112,240,.85);
  background:radial-gradient(circle at 30% 20%,rgba(199,112,240,.3),transparent 60%),
             linear-gradient(135deg,#1c1530,#120e22);
}
.pcard-media::after{
  content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(to top,rgba(10,8,20,.6),transparent 50%);
}
.pcard-cat,.pcard-star{
  position:absolute;z-index:1;bottom:10px;
  display:inline-flex;align-items:center;gap:6px;
  padding:4px 11px;border-radius:999px;font-size:.74rem;font-weight:500;
  background:rgba(15,12,28,.7);color:#fff;border:1px solid rgba(255,255,255,.18);
  backdrop-filter:blur(6px);
}
.pcard-cat{left:10px}
.pcard-star{
  right:10px;background:#c770f0;border-color:#c770f0;color:#1a0b24;font-weight:600;
}

.pcard-body{display:flex;flex-direction:column;flex:1;padding:18px 10px 8px}
.pcard-title{
  margin:0 0 8px;font-size:1.18rem;font-weight:600;color:#fff;text-align:left;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.pcard-desc{
  margin:0 0 14px;font-size:.88rem;line-height:1.6;color:#b9b9cc;text-align:left;
  display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;
  min-height:calc(.88rem * 1.6 * 3);
}

.pcard-features{
  margin:0 0 16px;padding:12px 0 0;list-style:none;
  border-top:1px solid rgba(255,255,255,.08);
  display:grid;gap:6px;align-content:start;
  min-height:calc(12px + 3 * 1.3rem + 2 * 6px);
}
.pcard-features li{
  display:flex;align-items:center;gap:10px;
  font-size:.83rem;line-height:1.3rem;color:#d6d6e4;text-align:left;
}
.pcard-features li::before{
  content:"";flex:none;width:6px;height:6px;border-radius:50%;
  background:#c770f0;box-shadow:0 0 8px rgba(199,112,240,.8);
}

.pcard-tech{
  display:flex;flex-wrap:wrap;align-content:flex-start;gap:6px;
  margin-top:auto;min-height:calc(3 * 24px + 2 * 6px);
}
.pcard-chip{
  height:24px;line-height:22px;padding:0 9px;border-radius:7px;
  font-size:.72rem;color:#e4e4ee;white-space:nowrap;
  background:rgba(199,112,240,.1);border:1px solid rgba(199,112,240,.25);
}

.pcard-actions{display:flex;gap:10px;margin-top:18px}
.pcard-btn{
  flex:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:9px 14px;border-radius:11px;font-size:.86rem;font-weight:500;
  text-decoration:none;cursor:pointer;
  transition:background .25s ease,border-color .25s ease,color .25s ease,transform .25s ease;
}
.pcard-btn:hover{transform:translateY(-1px)}
.pcard-btn--solid{background:#c770f0;color:#1a0b24;border:1px solid #c770f0}
.pcard-btn--solid:hover{background:#d894f5;border-color:#d894f5;color:#1a0b24}
.pcard-btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.28)}
.pcard-btn--ghost:hover{border-color:#c770f0;color:#c770f0}
.pcard-btn:focus-visible{outline:2px solid #c770f0;outline-offset:3px}

@media (prefers-reduced-motion:reduce){
  .pcard,.pcard::before,.pcard-media img,.pcard-btn{transition:none}
  .pcard:hover,.pcard:hover .pcard-media img,.pcard-btn:hover{transform:none}
}
`;

function ProjectCards(props) {
  const features = (props.features || []).slice(0, MAX_FEATURES);
  const tech = props.tech || [];

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      className={`pcard${props.featured ? " pcard--featured" : ""}`}
      onMouseMove={handleMove}
    >
      <style>{cardStyles}</style>

      <div className="pcard-media">
        {props.imgPath ? (
          <img
            src={props.imgPath}
            alt={`${props.title} project preview`}
            loading="lazy"
          />
        ) : (
          <div className="pcard-fallback" aria-hidden="true">
            <BsFileEarmarkTextFill />
          </div>
        )}
        {props.category && <span className="pcard-cat">{props.category}</span>}
        {props.featured && (
          <span className="pcard-star">
            <BsStarFill size={10} /> Featured
          </span>
        )}
      </div>

      <div className="pcard-body">
        <h3 className="pcard-title" title={props.title}>
          {props.title}
        </h3>
        <p className="pcard-desc">{props.description}</p>

        <ul className="pcard-features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="pcard-tech" aria-label="Technologies">
          {tech.map((t) => (
            <span className="pcard-chip" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="pcard-actions">
          {props.demoLink && (
            <a
              className="pcard-btn pcard-btn--solid"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite /> Live Demo
            </a>
          )}
          {props.ghLink && (
            <a
              className={`pcard-btn ${
                props.demoLink ? "pcard-btn--ghost" : "pcard-btn--solid"
              }`}
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;