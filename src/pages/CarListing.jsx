import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";


const CarListing = () => {
	
	
const [filterval , setfiltervalue] = useState('dd');
    const [typefilterval , settypefiltervalue] = useState('dd');
const [cars , setCars] = useState([]);


  const fetchData =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/cars")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let cars_Data = data;
console.log(cars_Data); 
setCars(cars_Data);
})
}

useEffect(() => {
		
		
       fetchData();
    },[])


	
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
                  
                  
                   <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort"></i> Type
                </span>

                <select 
				onChange ={(e) => {
					const selce = e.target.value;
					
					
						
							settypefiltervalue(selce);
				}
					
				}>
                  <option value="All">All</option>
                  <option value="LUX">LUX</option>
                  <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                </select>
              </div>
            </Col>
		{
			
			(filterval=='select' || filterval== 'dd' ) ? (
                
                
                 (typefilterval == "All" || typefilterval == 'dd') ?
              
                  (cars.map((item) => (  
                
              <CarItem item={item} key={item.id} />
            ))
                    
                
              ) : (cars.filter((item) =>item.cat==typefilterval).map((item) => (
              <CarItem item={item} key={item.id} />
            ))
			)
                
                
			) : (
                
                (typefilterval == "All" || typefilterval == 'dd') ?( 
                cars.filter((item) =>item.statuse==filterval ).map((item) => (
              <CarItem item={item} key={item.id} />
            )) ) :
                (
                  cars.filter((item) =>(item.statuse==filterval && item.cat == typefilterval) ).map((item) => (
              <CarItem item={item} key={item.id} />
            )) 
                
                
                )
                
                
                
			)
			
			 
		}
		
		
           
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
