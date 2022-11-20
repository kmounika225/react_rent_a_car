import React,{ useRef } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/BookingPlaceHolder";
import { Container, Row, Col } from "reactstrap";
import LoginSection from "../components/UI/Login";

import { Link } from "react-router-dom";


import RegisterSection from "../components/UI/Register";

import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";





const Login = () => {
  return (
      <Helmet title="Login into your account ">
      <CommonSection title="Login into your account" />

    
        <Container>
      
	   <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
			
			
			  <LoginSection />
			
			
			 
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

export default Login;
