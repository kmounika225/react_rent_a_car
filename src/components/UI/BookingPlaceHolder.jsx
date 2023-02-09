import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "20px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
            
              <h2 className="section__title">Thanks for booking Car with us </h2>
			  <br />
			  
              <h3 className="section__subtitle">
                We have recieved your Payment also sent invoice and Booking Confirmation details to your email address..
              </h3>

        
            </div>
          </Col>

      
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
