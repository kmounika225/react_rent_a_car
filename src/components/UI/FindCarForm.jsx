import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";


const FindCarForm = (props) => {
	const navigate = useNavigate();
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Date of Journey" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Time"
            required
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
         
		   <button className="btn find__car-btn" onClick={()=> navigate("/cars")}>Find Available Cars </button>
		 
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
