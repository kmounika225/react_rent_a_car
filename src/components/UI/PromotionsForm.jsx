import React ,{useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

import { useNavigate } from "react-router-dom";
const Promosec = ({ aboutClass }) => {
	 const navigate = useNavigate();
	
		const [prom_arr, setprom_arr] = useState([]);
  const fetchData =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/promos")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let promo_Data = data;
console.log(promo_Data); 
setprom_arr(promo_Data);

})
}

useEffect(() => {
		
		
       fetchData();
    }, [])

  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "0px" }
      }
    >
      <Container>
        <Row>
          <Col lg="12" md="6">
            <div className="about__section-content">
              <h1 className="section__subtitle">Promotions </h1>
              <h2 className="section__title">Get discount applying below Promos</h2>
                 
	   <br />
	 
	   {
		   prom_arr.map( prom => {
			   
			  return( 
			  
			   <div>
			  <div className = "card"   key = {prom.id}   onClick={()=> navigate("/cars")}>
			   {
				  <h2><strong>"{prom.promocode}" - {prom.dis} % OFF </strong> </h2>
					
				
			   }
			   
			   
			   {
				   <p> {prom.desc}</p> 
				  
			   }
                  <h4 class="text-align-end"> <strong>                 Book Now</strong></h4> 
			   </div>
			   
			              
	   <br />
			   
			   </div>
			

			   )
		   }
		   
		   )
		   
		   
	   }
     
        
            </div>
          </Col>

      
        </Row>
      </Container>
    </section>
  );
};

export default Promosec;
