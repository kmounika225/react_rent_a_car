import React, {useState , useEffect}from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import UserProfileForm from "../components/UI/UserProfileForm";
import { Container, Row, Col } from "reactstrap";
import "../styles/car-item.css";
import "../styles/booking-form.css";

import "../styles/about.css";

const UserProfile = () => {
  
    
     const [users_arr, setUsers_arr] = useState([]);
     const [email_user,setemail_user]=useState('')
     const [rides, setrides] = useState([]);
    const [stsheck, setstsheck] = useState(false);
     
    
      const fetchData =()=>{
fetch("https://63895fb0c5356b25a2ff0113.mockapi.io/carbookings")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let usrs = data;
console.log(usrs); 
setUsers_arr(usrs);
setstsheck(true)
fetchUserDetData();
    
    	  
    
    
})
}
    
      
      
          const fetchUserDetData =()=>{
              
        
      
      	  const usrname = users_arr.filter(user => user.username === localStorage.getItem('email') );
	
    console.log("fiedd")
    console.log(usrname)
    
     if(usrname.length)
         {
             
             setrides(usrname)
             
         }
   
              
          
    }
      
      
      
      
    
  useEffect(() => {
      
      setemail_user( localStorage.getItem('email'))
        fetchData();
    })   
    
    
    return (
    <Helmet title="Thanks for Renting the Car">
      <CommonSection title="Your Rides" />
      <UserProfileForm aboutClass="Rides" />

      <section className="about__page-section">
        <Container>
            
            
            
            
            
            
            
            	{
			
			(rides.length > 0) ? (rides.map((item) => (
             
                  <div>
                
                <div class="card">
                    
                    
                    <Col lg="30" className="mt-10">
                        
                        
                        
                        
              <div className="booking-info d-flex align-items-center justify-content-between mt-3 mb-4">
                   <div className="booking__form d-inline-block ms-1 mb-4">
                        
                                    
            
                        <h3><strong>Pickup : {item.fromplace} </strong></h3> 
                       <strong>Date & Time :  {item.fromdate} , {item.fromtime} </strong>
                       <br />
                       <br />
                     
                       <h3><strong> Drop Off : {item.toplace}</strong></h3>
                       
                       <strong>Date & Time :  {item.todate} , {item.totime} </strong>
                       
                    </div>
                    
                    
                
                  
                  
                  
                    
                   <div   className="booking__form d-inline-block ms-200 mb-0">
                       
                        
                       
                       
                              
                       <img src = {item.selectedcarimg} alt ="" className="w-100" />
                        <h4 className="rent__price text-center mt-0"> <strong>Car Name : {item.selectedcarname} </strong>   </h4>
           
        
                       </div>
                  
        
                  
                  <div className="booking__form d-inline-block  ms-0 mb-10 ">
                  
                
                      
                      <h2 className="rent__price text-center mt-0"> <strong>Total : {item.totalpaid} $</strong>   </h2>
                      
                       <h5 className="rent__price text-center mt-0"><strong> Mode of payment : {item.paymentmode} </strong></h5>
                      </div>
                  
                        </div>
 
                        
                    </Col>
                    
                     
                
                    
                </div>
                
                    <br />
                
                </div>
            ))
			) : (
                
                <div> <h1> Oops.. You dont have any rides booked</h1></div>
			)
			
			 
		}
            
            
    
            
            
            
        </Container>
      </section>
	

    
    </Helmet>
  );
};

export default UserProfile;
