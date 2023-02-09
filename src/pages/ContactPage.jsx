import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import ContactPage from "../components/UI/Contact";
import { Container, Row, Col } from "reactstrap";



import "../styles/about.css";

const BookingPlaceholder = () => {
  return (
    <Helmet title="BookingPlaceholder">
      <CommonSection title="BookingPlaceholder" />
      <ContactPage aboutClass="BookingPlaceholder" />

      <section className="about__page-section">
        <Container>
       
        </Container>
      </section>
	

    
    </Helmet>
  );
};

export default ContactPage;
