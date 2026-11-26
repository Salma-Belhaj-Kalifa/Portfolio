import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import homeLogo from "../../Assets/salmouch.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const styles = `
/* Le template met z-index:-1 sur .home-section : le contenu passait derrière la page et ne recevait plus les clics */
.home-section.hm-section{position:relative;z-index:0}

/* Particules en fond, sans capter les clics */
.hm-particles{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.hm-particles,.hm-particles *{pointer-events:none !important}
.hm-content{position:relative;z-index:2}

.hm-hero{align-items:center;min-height:78vh}

.hm-hello{
  display:inline-flex;align-items:center;gap:10px;margin-bottom:18px;
  padding:7px 16px;border-radius:999px;font-size:1rem;color:#e4e4ee;
  background:rgba(199,112,240,.12);border:1px solid rgba(199,112,240,.3);
}
.hm-name{
  margin:0 0 6px;text-align:left;font-size:clamp(2.2rem,5vw,3.6rem);
  font-weight:700;line-height:1.15;color:#fff;
}
.hm-name span{color:#c770f0}
.hm-type{padding:18px 0 8px;text-align:left}

.hm-cta{position:relative;z-index:3;display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}
.hm-btn{
  display:inline-flex;align-items:center;gap:10px;padding:12px 24px;border-radius:12px;
  font-size:.98rem;font-weight:500;text-decoration:none;
  transition:transform .3s ease,background .3s ease,border-color .3s ease,color .3s ease,box-shadow .3s ease;
}
.hm-btn:hover{transform:translateY(-3px)}
.hm-btn--solid{background:#c770f0;color:#1a0b24;border:1px solid #c770f0;box-shadow:0 10px 26px rgba(160,90,240,.3)}
.hm-btn--solid:hover{background:#d894f5;border-color:#d894f5;color:#1a0b24}
.hm-btn--ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
.hm-btn--ghost:hover{border-color:#c770f0;color:#c770f0}
.hm-btn:focus-visible{outline:2px solid #c770f0;outline-offset:3px}

.hm-pic{position:relative;display:grid;place-items:center;padding:10px}
.hm-pic::before{
  content:"";position:absolute;width:78%;aspect-ratio:1;border-radius:50%;
  background:radial-gradient(circle,rgba(199,112,240,.4),transparent 68%);
  filter:blur(34px);
}
.hm-pic img{position:relative;max-width:100%;max-height:400px;height:auto;object-fit:contain}

@media (max-width:767px){
  .hm-hero{min-height:auto;text-align:center}
  .hm-name,.hm-type{text-align:center}
  .hm-cta{justify-content:center}
  .hm-pic{margin-top:30px}
}
@media (prefers-reduced-motion:reduce){
  .hm-btn{transition:none}
  .hm-btn:hover{transform:none}
}
`;

function Home() {
  return (
    <section>
      <style>{styles}</style>

      <Container fluid className="home-section hm-section" id="home">
        <div className="hm-particles" aria-hidden="true">
          <Particle />
        </div>

        <Container className="home-content hm-content">
          <Row className="hm-hero g-4">
            <Col md={7} className="home-header">
              <span className="hm-hello">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </span>

              <h1 className="hm-name">
                I'M <span>Salma Ben Haj Khalifa</span>
              </h1>

              <div className="hm-type">
                <Type />
              </div>

              <div className="hm-cta">
                <Link to="/project" className="hm-btn hm-btn--solid">
                  View my projects <BsArrowRight />
                </Link>
                <Link to="/about" className="hm-btn hm-btn--ghost">
                  About me
                </Link>
              </div>
            </Col>

            <Col md={5}>
              <div className="hm-pic">
                <img src={homeLogo} alt="Salma Ben Haj Khalifa" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;