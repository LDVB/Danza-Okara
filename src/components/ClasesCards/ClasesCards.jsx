import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import "./ClasesCards.css";
import 'aos/dist/aos.css';

const ClasesCards = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  
  return (
    <div className="clases">
      <p className="titulo-clases">Ven a nuestras clases</p>
      <p className="texto-clases">
        ¡Únete a nuestras clases de danza y descubre un mundo de movimiento,
        expresión y diversión!
      </p>

      <div className="clases-cards">
        <Row>
          <Col>
            <div className="clase" data-aos="fade-up">
              <Link to="/clases#Avanzado">
                <img
                  className="img-class"
                  alt="clases de nivel avanzado"
                  src="src/assets/clases1.jpg"
                />
                <div className="cta-cards">
                  Avanzado
                  <img
                    className="icon-cards"
                    alt="clases de nivel avanzado"
                    src="src/assets/IconRow.png"
                  />
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="clase" data-aos="fade-up">
              <Link to="/clases#Medio">
                <img
                  className="img-class"
                  alt="clases de nivel medio"
                  src="src/assets/clases2.jpg"
                />
                <div className="cta-cards">
                  Medio
                  <img
                    className="icon-cards"
                    alt="clases de nivel medio"
                    src="src/assets/IconRow.png"
                  />
                </div>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="clase" data-aos="fade-up" >
              <Link to="/clases#Iniciacion">
                <img
                  className="img-class"
                  alt="clases de nivel iniciación"
                  src="src/assets/clases3.jpg"
                />
                <div className="cta-cards">
                  Iniciación
                  <img
                    className="icon-cards"
                    alt="clases de nivel medio"
                    src="src/assets/IconRow.png"
                  />
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="clase" data-aos="fade-up">
              <Link to="/clases#Latino">
                <img
                  className="img-class"
                  alt="clases de fusión latinos"
                  src="src/assets/clases4.jpg"
                />
                <div className="cta-cards">
                  Fusión latinos
                  <img
                    className="icon-cards"
                    alt="clases de nivel medio"
                    src="src/assets/IconRow.png"
                  />
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ClasesCards;