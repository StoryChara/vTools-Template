// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
     return (
          <footer className="custom-footer">
               <Container>
                    <Row className="footer-content">
                         <Col md={6} className="footer-section">
                         <h3 className="footer-title">CONTACT</h3>
                              <div className="social-links">
                                   <a href="https://github.com/StoryChara" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                   </a>
                                   <a href="https://discord.com/users/349912950649126913" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-discord"></i>
                                   </a>
                                   <a href="https://www.linkedin.com/in/mjarah/" target="_blank" rel="noopener noreferrer">
                                        <i class="fa-brands fa-linkedin"></i>
                                   </a>
                                   <a href="mailto:mjarah@unal.edu.co" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-envelope me-2"></i>
                                   </a>
                              </div>
                         </Col>

                         <Col md={6} className="footer-section text-center">
                         <div className="footer-logo">
                              <i className="fa-solid fa-star fa-flip-horizontal"></i>
                              <h3 className="mt-2">vTools Preview</h3>
                              </div>
                         </Col>
                    </Row>

                    <Row>
                         <Col className="text-center copyright">
                         <p><i class="fa-regular fa-copyright"></i> {new Date().getFullYear()} Story_Chara | <i className="fas fa-heart"></i></p>
                         </Col>
                    </Row>
               </Container>
          </footer>
     );
     }

     export default Footer;