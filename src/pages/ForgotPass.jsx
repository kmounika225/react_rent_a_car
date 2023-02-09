import React,{ useRef } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/BookingPlaceHolder";
import { Container, Row, Col } from "reactstrap";
import ForgotPasswordSection from "../components/UI/Forgotpassword";

import { Link } from "react-router-dom";


import RegisterSection from "../components/UI/Register";


import "../styles/about.css";





const ForgotPassword = () => {
  return (
      <Helmet title="Forgot Password ">
      <CommonSection title="Enter your registered email address" />

    
        <Container>
      
	   <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
			
			
			  <ForgotPasswordSection />
			
			
			 
            </Col>
          </Row>
		
		  <Row>
		    <Col lg="6" md="6" sm="12" className="m-auto text-center">
		     <Link to="/register">
                Don't have an account? Create an account
              </Link>
			   </Col>
		  </Row>
		   <Row>
		 
		    
			 
			 <Col lg="7" className="mt-5">
			  </Col>
		  </Row>
        </Container>
	  
	  
	
   
	

    
    </Helmet>
	
  );
};

export default ForgotPassword;
