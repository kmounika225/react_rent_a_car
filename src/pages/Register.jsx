import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import RegisterSection from "../components/UI/Register";


import "../styles/about.css";

const Register = () => {
  return (
      <Helmet title="Sign up with us ">
      <CommonSection title="Sign up with us" />

    
        <Container>
      
		
		<Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h2 className="mb-4 fw-bold ">Sign up With Your Details </h2>
                <RegisterSection />
              </div>
            </Col>
			 
        </Container>
   
	

    
    </Helmet>
	
  );
};

export default Register;
