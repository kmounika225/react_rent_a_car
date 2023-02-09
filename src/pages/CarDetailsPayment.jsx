import React, { useEffect } from "react";

//import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import "../styles/payment-method.css";
import { Link } from "react-router-dom";
import AboutSection from "../components/UI/AboutSection";
import { useNavigate } from "react-router-dom";

const CarDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  

  return (
    <Helmet title="Payment Information">
     
        <Container>
          <Row>
			     <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h2 className="mb-4 fw-bold ">Booking Information</h2>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h2 className="mb-4 fw-bold ">Payment Information</h2>
                <PaymentMethod />
				 </div>
            </Col>

          
			 <div className="payment text-end mt-5">
      
		
		
			 
			
			
			
      </div>

          
          </Row>
        </Container>
     
    </Helmet>
  );
};

export default CarDetails;
