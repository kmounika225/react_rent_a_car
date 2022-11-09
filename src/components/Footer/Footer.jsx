import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
         

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
 <h5 className="footer__link-title mb-4">Social Media </h5>
              <p className="office__info"> Instagram</p>
              <p className="office__info">FaceBook</p>

              <p className="office__info">YouTube</p>

     
            </div>
          </Col>

         <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contact us</h5>
              <p className="office__info"> Mounika</p>
              <p className="office__info">501 E , Uninversity of  Central Missuori</p>

              <p className="office__info">Email: sample@gmail.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

         
      
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
