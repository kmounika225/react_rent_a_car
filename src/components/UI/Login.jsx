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


const Login = () => {
	
	  const [errorMessage, setErrorMessage] = useState('');
	  const [usernameval , setusernameval] = useState('');
	   const [pwd, setPwd] = useState('');
	   const [success, setSuccess] = useState(false);
	   const [users_arr, setUsers_arr] = useState([]);
	   const [userdet_arr, setUsersdet_arr] = useState([]);
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  
  
  
  const fetchData =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/users")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let usrs = data;
console.log(usrs); 
setUsers_arr(usrs);
fetchUserDetData();
})
}

 const fetchUserDetData =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/registeredusers")
.then((response) =>{
return response.json(); 
}).then((data)=>{
let usrsdata = data;
console.log(usrsdata); 
setUsersdet_arr(usrsdata);

})
}
  


    useEffect(() => {
		
		
        setErrorMessage('');
    }, [usernameval, pwd])


   useEffect(() => {
		
		
        fetchData();
    }, [])



 const navigate = useNavigate();	
  const submitHandler = (e) => {
	  
	  const usrname = users_arr.filter(user => user.username === usernameval );
	 // const passwo = users_arr.filter(user => user.password === pwd );
	  const passwo = usrname[0].password === pwd;
	  
	  console.log("usegf");
	  console.log(usrname);
	  console.log("passs");
	  console.log(passwo);
	  
	  
	  if(usrname.length&&passwo)
	  {
		  const userar = userdet_arr.filter(user => user.username === usernameval );
		
		  
		  const fname = userar[0].fname;
		  const lname = userar[0].lname;
		  const phone = userar[0].phone;
		  const email = usernameval;
		  
		   alert("Sucessfully Logged in");
		   localStorage.setItem('fname',fname)
		   localStorage.setItem('lname',lname)
		   localStorage.setItem('phone',phone)
		     localStorage.setItem('email',email)
		 localStorage.setItem('islogged',true)
		 navigate("/cars")
	  }
	  else{
		 alert('Incorrect Username or password');
	 }
	  
	  
	  
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
			   <div className="payment text-center mt-4">
                <button  type="submit">
                  Login
                </button>
				 </div>
				   </FormGroup>
          
              </Form>
			  
            
  );
};


export default Login;
