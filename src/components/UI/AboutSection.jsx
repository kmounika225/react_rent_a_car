import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
//import aboutImg from "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2022/cars/malibu/01-images/2022-malibu-1sp-gsk-colorizer.jpg?imwidth=960";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Rent a Car</h2>
              <p className="section__description">
                Rent a Car is a website designed as a part of the Course Work of the UCM 
              </p>

        
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src= "https://raw.githubusercontent.com/scarlethawk85/rentcarimg/main/rollsryce.png" alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
