import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";


const Contact = ({ aboutClass }) => {
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
              <h4 className="section__subtitle"> We are avaiable 24/7</h4>
                
                <div class= "card">
                
              <h2 className="section__title">Contact Information</h2>
             
               <h4> Email: sample@gmail.com </h4>
               <h4> Phone: +1 123-745-897 </h4>
			   <h4> Address : 501 E , Uninversity of Central Missuori </h4>
                    </div>
              

        
            </div>
          </Col>

      
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
