import React,{useEffect} from "react";
import "../../styles/booking-form.css";
import "../../styles/about-section.css";
import "../../styles/payment-method.css";


import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
    
    
     var sBrowser, sUsrAg = navigator.userAgent;
    
    useEffect(() => {
        
        
        
        if(sUsrAg.indexOf("Chrome") > -1) {
  document.body.style.zoom = "100%" 
            
        }
        
        
        
     
        
        
     //   if(navigator.userAgent.indexOf("Chrome") != -1 ) {
            
         
     //   }
        //return 'Chrome';
        else 
         
        { document.body.style.zoom = "100%"  }
        
         
    });
    
    
     const stateData = [ 
	   "Select",
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
	
	const [status, setStatus] = React.useState(0)
    const [insstatus, setInsStatus] = React.useState(0)
     const [insvalue, setInsVal] = React.useState(0.00)
	const [promostatus, setpromostatus] = React.useState(0)
	const [total, settotal] = React.useState(0)
	const [addons, setaddons] = React.useState(0)
	const [discount, setdiscount] = React.useState(0)
	const [tax, setTax] = React.useState(15)
	const [taxamount, settaxamount] = React.useState(0)
	const [totalwithtax, settotalwithtax] = React.useState(0)
	 const [status_opt, setOptStatus] = React.useState(0)
	const [totalhrs, settotalhrs] = React.useState(0)
	
	const [fname_user, setfname_user] = React.useState('')
	const [lname_user, setlname_user] = React.useState('')
	const [email_user, setemail_user] = React.useState('')
	const [phone_user, setphone_user] = React.useState('')
	 const [checked, setChecked] = React.useState(false);
     const [insinvchecked, setinsinvchecked] = React.useState(false);
	
	const [fromplace, setfromplace] = React.useState('')
	const [toplace, settoplace] = React.useState('')
	const [fromdate, setfromdate] = React.useState('')
	const [todate, settodate] = React.useState('')
	
	const [fromtime, setfromtime] = React.useState('')
	const [totime, settotime] = React.useState('')
	
	const [insplan, setinsplan] = React.useState('Insurane opted out')
	
	const [selectedcarname, setselectedcarname] = React.useState('')
	const [selectedcarid, setselectedcarid] = React.useState('')
	const [selectedcarprice, setselectedcarprice] = React.useState(0.00)
	
	const [promoarr, setpromoarr] = React.useState([])
	const [selectedpromo, setselectedpromo] = React.useState('')
	const [selectedpromodis, setselectedpromodis] = React.useState(0)
	const [totalRentalDays, setTotalRentalDays] = React.useState(0)
	
	//const [totalwithtax, settotalwithtax] = React.useState(0)
	const [flag, setflag] = React.useState(0)
	
	
	
	
	//const [prom_arr, setpromarr] = useState([]);
  const fetchDataPromo =()=>{
fetch("https://63895b77c5356b25a2feb5ca.mockapi.io/promos")
      
.then((response) =>{
return response.json(); 
}).then((data)=>{
let promo_Data = data;
console.log("promodat")
console.log(promo_Data); 
setpromoarr(promo_Data);
setflag(1);

})
}

	
	
	
			const handlePromo = event => {
    console.log("prpmp"+event.target.value);
	console.log(promoarr);
	
	if((event.target.value).length)
		
		{
	
	setselectedpromo((event.target.value).toUpperCase());
	

	
	
	  const promo_single = promoarr.filter(promo => promo.promocode === (event.target.value).toUpperCase() );
	
	 if (promo_single.length)
		 
		 {
			 
			 const prom_dis = promo_single[0].dis; 
			 setselectedpromodis(prom_dis);
       const discounted_price = ((totalRentalDays  * selectedcarprice)* selectedpromodis /100)
	   
       setdiscount(discounted_price)
       
		 }
	 
			}
			else {
				setselectedpromodis(0);
			}
	
	
  };
	
	
	useEffect(() => {
        // call api or anything
		if(flag == 0)
		{fetchDataPromo();}
	
		
       
		
     },[promoarr]);
	
    
    
     const makeinsuranceVisible = (status) => {
     
        
         
        
         if (status==1)
             {
                  setOptStatus(status)
                 setInsStatus(1)
                 setinsinvchecked(false)
                
                 
               
             }
         
         else 
             {
                 setInsStatus(0) 
                 
             }
         
         //InsureOptions()
         
     }
     
     
        
     const makeinsuranceInVisible = (status) => {
     
         //InsureOptions()-2
        
         if (status==2)
             {
                  setOptStatus(status)
                 setInsVal(0.00)
                 setInsStatus(0)
                 
                setinsplan("No Plan - Insurance opted out")
                 // setinsinvchecked(false)
                setChecked(false)
                 
               
             }
         
         else 
             {
                 setInsStatus(0) 
                 setInsVal(0.00)
                 
             }
         
        
         
     }
     
	
	 const fetchValues = () => {
		 

		
		setfname_user(localStorage.getItem('fname'))
		setlname_user(localStorage.getItem('lname'))
		setphone_user( localStorage.getItem('phone'))
         
         if (localStorage.getItem('email') === '')
             {
                 setemail_user()
                 
             }
         else
             {
                 setemail_user( localStorage.getItem('email'))
             }
		
		setfromplace( localStorage.getItem('fromplace'))
		settoplace(localStorage.getItem('toplace'))
		setfromdate( localStorage.getItem('fromdate'))
		settodate( localStorage.getItem('todate'))
		setfromtime( localStorage.getItem('fromtime'))
		settotime( localStorage.getItem('totime'))
		
		
		 setselectedcarid( localStorage.getItem('selectedcarid'))
	  setselectedcarname(localStorage.getItem('selectedcarname'))
	  setselectedcarprice(localStorage.getItem('selectedcarprice'))
	  
	  
	
		
		console.log("fbame")
		console.log(promoarr)
		 
		
		

	
	 };
	
	  useEffect(() => {
        // call api or anything
		fetchDataPromo();
		fetchValues();
		
        console.log("loaded");
		
     });	
	
  const submitHandler = (status) => {
      
  
      
      
      	if (fromplace == toplace || fromplace == "Select" || toplace == "Select" )
		{
			
			alert("From and To cannot be empty or same City/Town ")
		}
	
	else {
		
		
		if (fromdate == "dd-mm-yyyy" || fromdate == "" || fromtime == "" || fromtime == "--:--" || todate == "dd-mm-yyyy" || todate == "" || totime == "" || totime == "--:--") 
		{
			alert("enter valid journey date/time")
		}
	else{	
		
      const curdate = new Date()
        
    const from_year = fromdate.substring(0,4)
	 const from_month = fromdate.substring(5,7)
	  const from_day = fromdate.substring(8,fromdate.length)
	  const from_hour = fromtime.substring(0,2)
	  const from_min = fromtime.substring(3,fromtime.length)
	
	  
	   const to_year = todate.substring(0,4)
	 const to_month = todate.substring(5,7)
	  const to_day = todate.substring(8,todate.length)
	  
	   const to_hour = totime.substring(0,2)
	  const to_min = totime.substring(3,totime.length)
	  
   
        var from_diffe = from_month-1
         var to_diffe = to_month-1
	  const fromdate_hr = new Date(from_year, from_diffe, from_day, from_hour, from_min)
	   const todate_hr = new Date(to_year,to_diffe , to_day, to_hour, to_min)
	   
       var from_flag = fromdate_hr < Date.now();
         var to_flag = todate_hr < Date.now();
        var from_to_flag =  todate_hr < fromdate_hr;
    
        
        
            
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
        
        	   
	   const msInHour = 1000 * 60 * 60;
        
	   
	   const timediffer =  Math.round(Math.abs(todate_hr - fromdate_hr) / msInHour);

     const totalDays = (timediffer/24);
	   
	   const totalInsurance = totalDays * insvalue;
	   const total_amount_cal = totalDays  * selectedcarprice;
	   
	   const discounted_price = ((total_amount_cal)* selectedpromodis /100)
	   
	   var amount_discount_tot = total_amount_cal+insvalue;

       if (selectedpromodis)

	   { amount_discount_tot = total_amount_cal+insvalue - ((total_amount_cal)* selectedpromodis /100) }
	   
	   const cal_tax = ((amount_discount_tot)* tax /100)
	   const rentalDays = new Date(todate_hr - fromdate_hr).getUTCDate() - 1;
	   settotalhrs(rentalDays);
     setTotalRentalDays(rentalDays); 
	   
	
	   settaxamount(cal_tax)
	   

	   
	   setdiscount(discounted_price)

	   settotal(total_amount_cal)
	   
	   
	   
	   const total_with_all_tax = amount_discount_tot+cal_tax+addons
	   
	   var fixed_one = Math.round(total_with_all_tax * 100) / 100
	   
	   
	   localStorage.setItem('useramount',fixed_one)
	   
	   settotalwithtax(cal_tax + total_amount_cal+ Number(addons) + (insvalue*rentalDays) - discounted_price );

	   
	   
	
	setStatus(status);
   
        }
  
  }
  
    }
    };
  
    const Promhandle = (promostatus) => {
  
	
	setpromostatus(promostatus);
	
	
  };
  
  		const handleAddons = event => {
    console.log(event.target.value);
	
	setaddons(event.target.value)
  };
  
  
  
  const PromBuuton = () => {
 
	return(
	
	<div> 
	<br />
	<h5> Promo discount {selectedpromodis} % applied </h5>
	
	</div>
	)
	
  };
   
  const  setcarMyLiab= (sts) =>
    {
        if(sts ==1)
        {setinsplan("ALI - $16.50/ Day") 
         setInsVal(16.50)
        }
        
     if(sts ==2)
        {setinsplan("LDW - $29.50/ Day")
        setInsVal(29.50)}
    };
    
    
    
      const InsureOptions = () => {
 
	
	
	
	return(
	
	<div> 
	<br />
	  <h5 className="mb-4 fw-bold ">Insurance Details</h5>

          <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio"  name="release" onClick={(e) =>setcarMyLiab(1) } /> 
Cover My Liability (ALI) - $16.50/ Day
        </label>

      </div>
          
     

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio"  name="release"  onClick={(e) => setcarMyLiab(2)} /> Cover Car and My Liability (LDW) - $29.50/ Day
        </label>
      </div>
	<br />
            
	</div>
	)
  };
  const funfromdate = (itemed) => {

      setfromdate(itemed)
      localStorage.setItem('fromdate', itemed)
  }
  
  
  const funfromtime = (itemed) => {

      setfromtime(itemed)
      localStorage.setItem('fromtime', itemed)
  }
  
  const funtodate = (itemed) => {

      settodate(itemed)
      localStorage.setItem('todate', itemed)
  }
  
  const funtotime = (itemed) => {

      settotime(itemed)
      localStorage.setItem('totime', itemed)
  }
  
  

  
  
  
   
  			const handlefrom = event => {
    console.log("from"+event.target.value);
	
	setfromplace(event.target.value)
                 localStorage.setItem('fromplace',event.target.value);
  };
  
  		const handleto = event => {
    console.log("to"+event.target.value);
	
	settoplace(event.target.value)
            
		 localStorage.setItem('toplace',event.target.value);
  };
  
    
    		const handleemail = event => {
 
	    if(event.target.value.length > 1)
                
               {
                    setemail_user(event.target.value)
            
		 localStorage.setItem('email',event.target.value);
               }
                
                
            else {
                
             
            }
                    
                
	
  };
    

  
       		const handlephone = event => {
 
	
                
                if (event.target.value.length == 0)
                    {
                        
                        alert("Phone number should not be empty")
                    }
                
                else {
                    setphone_user(event.target.value)
            
		 localStorage.setItem('phone',event.target.value);
                    
                }
	
  }; 
  
    
     
       		const checkemail = () => {
             
	
  }; 
  
    const displayTotal = () =>
  {
      
      checkemail()
	 
	  return(
	  
	 
	   <div className = "card">
	 
	  <div className="booking-info mt-5">
	  <h2><strong> Billing Summary </strong></h2>
	 <h4>---------------------------------</h4>
	  <h4> <strong> Total  ({totalhrs} days x ${selectedcarprice})          :      ${total}  </strong> </h4>
	  <h4> <strong>  Add ons         :          ${addons}  </strong> </h4>
       <h4> <strong>  Insurance Value         :          ${insvalue}  </strong> </h4>  
        <h4> <strong>  Insurance Plan         :          {insplan} </strong> </h4>    
        <h4> <strong>  Total Insurane        :    ${insvalue} X {totalRentalDays} days = ${insvalue*totalRentalDays} </strong> </h4>    
          
          
	  <h4> <strong> Promo Discount ( -{selectedpromodis} % )   :    ${discount}  </strong> </h4>
	   <h4> <strong> Tax ( +15% )    :    ${taxamount}  </strong> </h4>
	   <h2>-----------------------</h2>
	   <h3> <strong> Total With Tax    :   ${totalwithtax} </strong> </h3>
	 
	  </div>
	  <br />
	  
	  </div>)
  };
    
  const drawNoContent = () =>
  {
	  
	  return(
	   
              <div></div>)
  }
  
  return (
  <div>
   
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" value = {fname_user} disabled="disabled" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" value = {lname_user} disabled="disabled" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" value = {email_user} onClick= {handleemail} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" value = {phone_user} onChange = {handlephone}  />
      </FormGroup>

    
          
          
          
          	  
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
		
	
		<select  onChange={handlefrom} name="userstate" id="user-res-select" value = {fromplace}>
        {stateData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    
    
        </FormGroup>

        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
     
	
		
		<select onChange={handleto}  name="tostate" id="to-res-select" value = {toplace} >
        {stateData.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
   
    
		  
		  
        </FormGroup>

   <br />

   <br />
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
	   <h5> <strong>Pick up Time</strong> </h5>
	   
        <input type="date" placeholder="From Date" value = {fromdate} onChange={(e) => funfromdate(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="From Time"
          className="time__frompicker"
		  value = {fromtime}
            onChange={(e) => funfromtime(e.target.value)}
        />
      </FormGroup>
	
	   <FormGroup className="booking__form d-inline-block me-4 mb-4">
	   <h5> <strong>Drop Off Time</strong> </h5>
        <input type="date" placeholder="Till Date" value = {todate} onChange={(e) => funtodate(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="To Time"
          className="time__topicker"
		  value = {totime}
            onChange={(e) => funtotime(e.target.value)}
        />
      </FormGroup>
	  
   <br />

   <br />
	   <FormGroup className="booking__form d-inline-block me-4 mb-4">
	    <h5> <strong>Choose Addons</strong> </h5>
        <select name="addons" id="optaddon" onChange={handleAddons} >
		 <option value="0">None</option>
          <option value="30">Child Seat - $30 </option>
          <option value="20">Bike Racks - $20 </option>
       
        </select>
      </FormGroup>
	  
	   <FormGroup className="booking__form d-inline-block ms-1 mb-4">
	    <h5> <strong>Promo Codes</strong> </h5>
        <input type="text" placeholder="Enter Promo Code--(Optional)" onChange={handlePromo} />
      </FormGroup>
	  
	  {promostatus === 1 && PromBuuton()}

   <br />

     <FormGroup  >
    <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
             
        
       <input type="radio"    name= "release" checked={status_opt === 1}  onClick={(e) =>makeinsuranceVisible(1)} />  I want to insure my ride
        </label>
        
        
         <label htmlFor="" className="d-flex align-items-center gap-2">
             
        
       <input type="radio"   name="release"  checked={status_opt === 2} onClick={(e) =>makeinsuranceInVisible(2)} />  I Opt out insurance
        </label>
        
        
         </div>
          </FormGroup>
          
        
             { insstatus === 1 && InsureOptions()}
          {status_opt === 2 && drawNoContent()}
          
          
   <br />
          
          
   
   <FormGroup className="booking__form d-inline-block me-4 mb-4">
    <div className="payment text-start mt-1">
        <button checked={status === 1} onClick={(e) => submitHandler(1)}>View Summary</button>
      </div>
	  </FormGroup>
    <FormGroup className="booking__form d-inline-block ms-1 mb-4">
	 <div className="payment text-end mt-1">
        <button checked={promostatus === 1 } onClick={(e) => Promhandle(1)}>Add promo</button>
			
      </div>
         </FormGroup>
           <br />
          <br />
          
  <br />
   <br />
	{status === 1 && displayTotal()}
	</div>
	
  );
};

export default BookingForm;
