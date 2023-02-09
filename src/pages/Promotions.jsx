import React ,{useState, useEffect} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/PromotionsForm";
import { Container, Row, Col } from "reactstrap";



import "../styles/about.css";

const PromocodesSection = () => {
	
	

	
	
	
  return (
    <Helmet title="Promotional Codes">
      <CommonSection title="Promotional Codes" />
      <AboutSection aboutClass="Promotional Codes" />
      
      <section className="about__page-section">
        <Container>
   
	   
	   
        </Container>
      </section>
	

    
    </Helmet>
  );
};

export default PromocodesSection;
