import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

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
              <h4 className="section__subtitle">Booking Confirmation</h4>
              <h2 className="section__title">Car booking progress</h2>
              <p className="section__description">
                Car is the being booked.Wait for confirmation page.
              </p>

        
            </div>
          </Col>

      
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
