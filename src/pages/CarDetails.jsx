import React, { useEffect,useState } from "react";


import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import "../styles/payment-method.css";
import { Link } from "react-router-dom";
import AboutSection from "../components/UI/AboutSection";
import { useNavigate } from "react-router-dom";

const CarDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
   const [carsarr , setUsersdet_arr]  = useState([]);
    
    const[singleCarItem, setsingleCarItem] = useState(null);
    
    const fetchUserDetData =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/cars")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let usrsdata = data;
    console.log("thhhs")
console.log(usrsdata); 
setUsersdet_arr(usrsdata);

})
}
  


    useEffect(() => {
		
		
        fetchUserDetData();
        
    },[])
    


  const validated = (itemed) => {

      
          
	if (itemed.statuse === "inactive")
	{
		alert("This Car is inactive. Please choose another car")
		
	}
	
	else
	{    

      localStorage.setItem('selectedcarid' , itemed.id)
	  localStorage.setItem('selectedcarname' , itemed.carName)
	  localStorage.setItem('selectedcarprice' , itemed.price)
        localStorage.setItem('selectedcarimg' , itemed.imgUrl)
		
		navigate(`/carsPay/${itemed.carName}`)
	}
      
  }





  return (
      
     <div>
      
          {
              
            
              
          carsarr && carsarr.length > 0 && carsarr.filter((item) =>item.carName === slug ).map((item) =>{
              
              
          return(
     
                  
                   <Helmet title={item.carName}>
                  
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={item.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{item.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${item.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({item.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {item.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {item.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.brand}
                  </span>
                </div>
              </div>
            </Col>

          
			 <div className="payment text-end mt-5">
      
	
		
			 <button className="btn find__car-btn" onClick={(e)=>validated(item)}>Book Now </button>
			<br />
			
			<br />
			
			<br />
			<br />
				
			<br />
			
			<br />
			<br />
			
			
      </div>

          
          </Row>
        </Container>
      </section>
    </Helmet>
   )
              
          })
                  
                  
          }
          </div>
  );
};

export default CarDetails;
