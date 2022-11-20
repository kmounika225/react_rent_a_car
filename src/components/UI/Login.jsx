import React,{useRef,useEffect} from "react";
import {useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import validator from 'validator';
import { Container, Row, Col } from "reactstrap";
import "../../styles/booking-form.css";
import "../../styles/payment-method.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userData from "../../assets/data/userData";

const Login = () => {
	
	  const [errorMessage, setErrorMessage] = useState('');
	  const [usernameval , setusernameval] = useState('');
	   const [pwd, setPwd] = useState('');
	   const [success, setSuccess] = useState(false);
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  
  
   useEffect(() => {
        loginNameRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [usernameval, pwd])

 const navigate = useNavigate();	
  const submitHandler = (e) => {
	 const k = localStorage.getItem(usernameval)
	 
	 if (k == pwd)
	 {
		 alert("Sucessfully Logged in");
		 localStorage.setItem('islogged',true)
		 navigate("/cars")
	 }
	 else{
		 alert('Incorrect Username or password');
	 }
 
  /*for (let i = 0 ; i< userData.length ; i++ ) {
	  
    if ((userData[i].username == usernameval) && (userData[i].passwords == pwd))
	{
		 alert("Login sucess");
		 navigate("/home")
		 break;
	}

  }*/
  
  
  
 // alert('Incorrect Username or password');
   e.preventDefault();
  };

  return (
    
              <Form  onSubmit={submitHandler}>
                <FormGroup className="booking__form d-inline-block me-4 mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
					onChange={(e) => setusernameval(e.target.value)}
                            value={usernameval}
                  />
              </FormGroup>
             < FormGroup className="booking__form d-inline-block me-4 mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
					 onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
					
                  />
              </FormGroup>
			  <FormGroup>
			   <div className="payment text-center mt-6">
                <button  type="submit">
                  Login
                </button>
				 </div>
				   </FormGroup>
              </Form>
			  
            
  );
};


export default Login;
