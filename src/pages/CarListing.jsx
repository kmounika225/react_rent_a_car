import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
//import Select from "react-select";
//import from react;

const CarListing = () => {
	
	
const [filterval , setfiltervalue] = useState('dd');
	
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort"></i> Filter By
                </span>

                <select 
				onChange ={(e) => {
					const selc = e.target.value;
					
					
						
							setfiltervalue(selc);
				}
					
				}>
                  <option value="select">Active&Inactive</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </Col>
		{
			
			(filterval=='select' || filterval== 'dd') ? (carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))
			) : (carData.filter((item) =>item.statuse==filterval ).map((item) => (
              <CarItem item={item} key={item.id} />
            ))
			)
			
			 
		}
		
		
           
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
