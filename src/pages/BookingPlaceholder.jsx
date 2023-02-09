import React,{useEffect} from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/BookingPlaceHolder";
import { Container, Row, Col } from "reactstrap";


import "../styles/about.css";


const BookingPlaceholder = () => {
          
  const functioned =()=>{
        
        var isGuest = localStorage.setItem('isguest',true)
        
        if (isGuest)
        {
         localStorage.setItem('islogged',false)
        localStorage.setItem('email','')
        
        
    }
   
     
    }
    

useEffect(() => {
   
   functioned();
  });
    
    
  return (
    <Helmet title="Thanks for Renting the Car">
      <CommonSection title="Booking Confirmation" />
      <AboutSection aboutClass="BookingPlaceholder" />

      <section className="about__page-section">
        <Container>
       
        </Container>
      </section>
	

    
    </Helmet>
  );
};

export default BookingPlaceholder;
