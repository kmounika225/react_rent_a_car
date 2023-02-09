
import React, {useEffect, useState} from 'react';
import "../../styles/find-car-form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";


import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';


const FindCarForm = (props) => {
	
	
	  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')
   const [to_text, setto_Text] = useState('')
     const [from_text, setfrom_Text] = useState('')
	 
	 const [from_time, setfrom_time] = useState('')
	  const [to_time, setto_time] = useState('')
	 
	 const [from_date, setfrom_date] = useState('')
	 const [to_date, setto_date] = useState('')
     
      
	   const stateData_from = [ 
	   "Pick up",
	   "Kansas City",
    "St. Louis",
    "Springfield",
    "Independence",
    "Columbia",
    "Lee's Summit",
    "O'Fallon",
    "St. Joseph",
    "St. Charles",
    "St. Peters",
    "Blue Springs",
    "Florissant",
    "Joplin",
    "Chesterfield",
    "Jefferson City",
    "Cape Girardeau" ]
       
       
       
       	   
	   
	   const stateData_to = [ 
	   "Drop off",
	   "Kansas City",
    "St. Louis",
    "Springfield",
    "Independence",
    "Columbia",
    "Lee's Summit",
    "O'Fallon",
    "St. Joseph",
    "St. Charles",
    "St. Peters",
    "Blue Springs",
    "Florissant",
    "Joplin",
    "Chesterfield",
    "Jefferson City",
    "Cape Girardeau" ]
        
     
 
   
   	
		
		
		
		
		 
  
  		const handlefromTime = event => {
    console.log(event.target.value);
	
	setfrom_time(event.target.value)
             localStorage.setItem('fromtime',event.target.value);
  };
  
  	const handletoTime = event => {
    console.log(event.target.value);
	
	setto_time(event.target.value)
         localStorage.setItem('totime',event.target.value);
  };
  
  
  		const handlefromDate = event => {
    console.log("fromdate"+event.target.value);
            

	
	setfrom_date(event.target.value);
            localStorage.setItem('fromdate',event.target.value);
	
	
	
  };
  
  
  	const handletoDate = event => {
    console.log("todate"+event.target.value);
	
	setto_date(event.target.value)
         localStorage.setItem('todate',event.target.value);
	
	
	
  };
  
  
  
  			const handleChange = event => {
    console.log("from"+event.target.value);
	
	setfrom_Text(event.target.value)
                 localStorage.setItem('fromplace',event.target.value);
  };
  
  		const handleChanged = event => {
    console.log("to"+event.target.value);
	
	setto_Text(event.target.value)
            
		 localStorage.setItem('toplace',event.target.value);
  };
    const submitHandler = (e) => {
		
		if ( from_text == "Pick up" || to_text == "Drop off" )
		{
			
			alert("From and To cannot be empty or same City/Town ")
		}
	
	else {
		
		
		if (from_date == "dd-mm-yyyy" || from_date == "" || from_time == "" || from_time == "--:--" || to_date == "dd-mm-yyyy" || to_date == "" || to_time == "" || to_time == "--:--") 
		{
			alert("enter valid journey date/time")
		}
	else{	
		
      const curdate = new Date()
        
    const from_year = from_date.substring(0,4)
	 const from_month = from_date.substring(5,7)
	  const from_day = from_date.substring(8,from_date.length)
	  const from_hour = from_time.substring(0,2)
	  const from_min = from_time.substring(3,from_time.length)
	
	  
	   const to_year = to_date.substring(0,4)
	 const to_month = to_date.substring(5,7)
	  const to_day = to_date.substring(8,to_date.length)
	  
	   const to_hour = to_time.substring(0,2)
	  const to_min = to_time.substring(3,to_time.length)
	  
   
        var from_diffe = from_month-1
         var to_diffe = to_month-1
	  const from_date_hr = new Date(from_year, from_diffe, from_day, from_hour, from_min)
	   const to_date_hr = new Date(to_year,to_diffe , to_day, to_hour, to_min)
	   
       var from_flag = from_date_hr < Date.now();
         var to_flag = to_date_hr < Date.now();
        var from_to_flag =  to_date_hr < from_date_hr;
   
        
        
            
        if (from_flag  || to_flag  || from_to_flag)
       
        {
            if (from_flag )
            
            {
                alert("Pick up Date Time should be greater that Today date and time")
            }
        
         
        if (to_flag)
            
            {
                alert("Drop Off Date Time should be greater that Today date and time")
            }
        
            
            if (from_to_flag)
            
           {
                alert("Pick up and Drop off time should not be less than or same")
            }
        
        }
        
        else{
            
            
            
             const k = localStorage.getItem('islogged')
	
	 if(k=="true")
	 {
		navigate("/cars");
	
		 
		
		
	 }
	 else{
		 navigate("/login");
	 }
            
        }
        
        
	   
	}
	 

  
	}
  

   e.preventDefault();
  };

 
	const navigate = useNavigate();
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
	  
        <FormGroup className="select__group">
		
	
		<select onChange={handleChange} className = "journey__from_place" name="userstate" id="user-res-select">
        {stateData_from.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    
    
        </FormGroup>

        <FormGroup className="select__group">
     
	
		
		<select  className = "journey__to_place" onChange={handleChanged} name="tostate" id="to-res-select">
        {stateData_to.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
   
    
		  
		  
        </FormGroup>
		

        
          
          <FormGroup className="form__group">
          <input type="date" className = "journey__from_date" required onChange={handlefromDate} />
        </FormGroup>
  <FormGroup className="form__group">
          <input type="date" className = "journey__to_date"  required onChange={handletoDate} />
        </FormGroup>


      
          
          
        <FormGroup className="form__group">
          <input
            className="journey__from_time"
            type="time"
            
            required
			onChange={handlefromTime}
          />
		  
		  
		  
        </FormGroup>
		
		   <FormGroup className="form__group">
          <input
            className="journey__to_time"
            type="time"
            
            required
			onChange={handletoTime}
          />
		  
		  
		  
        </FormGroup>
        <FormGroup className="select__group">
       <br />
              <br />
             <br />
             
        </FormGroup>

        <FormGroup className="form__group">
         
		   <button className="btn find__car-btn" onClick={submitHandler}>Find Available Cars </button>
		 
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
