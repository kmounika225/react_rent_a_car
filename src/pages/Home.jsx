import React,{useEffect} from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";


const Home = () => {
    
    
    var sBrowser, sUsrAg = navigator.userAgent;
    
    useEffect(() => {
        
        
        
        if(sUsrAg.indexOf("Chrome") > -1) {
  document.body.style.zoom = "100%" 
            
        }
        
 
        else 
         
        { document.body.style.zoom = "100%"  }
        
         
    });
    
   
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
     <HeroSlider />

        <div className="hero__form">
		   
          <Container>
            <Row className="form__row">
              <Col lg="6" md="10">
                <div className="find__cars-left">
                  <h2>Book a Date and Time </h2>
                </div>
              </Col>

              <Col lg="6" md="10" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      
     

     

      {/* =============== blog section =========== */}
  
    </Helmet>
  );
};

export default Home;
