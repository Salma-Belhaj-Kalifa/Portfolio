import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa"; // Add this import at the top

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Salma Ben Haj Khalifa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/salma-belhaj-kalifa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/salma.belhaj.kalifa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salma-belhaj-kalifa-b3b42623b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            <li className="social-icons">
                            <a
                              href="https://www.instagram.com/salmaa_bhk/"
                              target="_blank"
                              rel="noreferrer"
                              className="icon-colour home-social-icons"
                            >
                              <AiFillInstagram />
                            </a>
                          </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
