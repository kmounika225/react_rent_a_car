import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/BookingPlaceHolder";
import { Container, Row, Col } from "reactstrap";


import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const BookingPlaceholder = () => {
  return (
    <Helmet title="BookingPlaceholder">
      <CommonSection title="BookingPlaceholder" />
      <AboutSection aboutClass="BookingPlaceholder" />

      <section className="about__page-section">
        <Container>
       
        </Container>
      </section>
	

    
    </Helmet>
  );
};

export default BookingPlaceholder;
