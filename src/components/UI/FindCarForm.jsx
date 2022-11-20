
import React, {useEffect, useState} from 'react';
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import stateData from "../../assets/data/stateData";

//import stateData from "../assets/data/stateData";

import axios from 'axios'
import { Hint } from 'react-autocomplete-hint';


const FindCarForm = (props) => {
	
	
	  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')
   const [to_text, setto_Text] = useState('')
     const [from_text, setfrom_Text] = useState('')
	 
	 const [jour_time, setjour_time] = useState('')
	 
	 const [jour_date, setjour_date] = useState('')
   const getData = async () => {
	   
	   
	 /*  (carData.filter((item) =>item.statuse==filterval ).map((item) => (
              <CarItem item={item} key={item.id} />
            ))
			)
    const res = 
      var hintArray = []
       res.data.map(a => hintArray.push(a.name))*/
	   
	   
	   const stateData = [  "Kansas City",
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
        
  }
  
  		const handleTime = event => {
    console.log(event.target.value);
	
	setjour_time(event.target.value)
  };
  
  
  		const handleDate = event => {
    console.log("date"+event.target.value);
	
	setjour_date(event.target.value)
  };
  			const handleChange = event => {
    console.log("from"+event.target.value);
	
	setfrom_Text(event.target.value)
  };
  
  		const handleChanged = event => {
    console.log("to"+event.target.value);
	
	setto_Text(event.target.value)
  };


  
    const submitHandler = (e) => {
		
		if (from_text == to_text)
		{
			
			alert("From and To cannot be same City/Town")
		}
	
	else {
		
		
		if (jour_date == "dd-mm-yyyy" || jour_date == "" || jour_time == "" || jour_date == "--:--") 
		{
			alert("enter valid journey date/time")
		}
	else{	
		
	 const k = localStorage.getItem('islogged')
	// alert(k)
	 if(k=="true")
	 {
		navigate("/cars");
	 }
	 else{
		 navigate("/login");
	 }
	}
	 
 
  /*for (let i = 0 ; i< userData.length ; i++ ) {
	  
    if ((userData[i].username == usernameval) && (userData[i].passwords == pwd))
	{
		 alert("Login sucess");
		 navigate("/home")
		 break;
	}

  }*/
  
	}
  
 // alert('Incorrect Username or password');
   e.preventDefault();
  };

  useEffect(()=> {
    getData()
  })
	const navigate = useNavigate();
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
	  
        <FormGroup className="select__group">
		
	
		<select onChange={handleChange} name="userstate" id="user-res-select">
        {stateData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    
    
        </FormGroup>

        <FormGroup className="select__group">
     
	
		
		<select  onChange={handleChanged} name="tostate" id="to-res-select">
        {stateData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
   
    
		  
		  
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Date of Journey" required onChange={handleDate} />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            
            required
			onChange={handleTime}
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
		   <option value="all">ALL</option>
            <option value="suv">SUV</option>
            <option value="hatch_back">Hatch Back</option>
			<option value="sedan">Sedan</option>
			<option value="LUX">Luxury</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
         
        <button className="btn find__car-btn" onClick={submitHandler}>Find Available Cars </button>
		 
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
