import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";


const UserProfileForm = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
            
              <h1><strong>Ride Summary</strong> </h1>
			  
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserProfileForm;
