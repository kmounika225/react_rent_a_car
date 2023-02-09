import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PlaceHolder from "../pages/BookingPlaceholder";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Register from "../pages/Register";
import Promos from "../pages/Promotions";
import CarPayDetails from "../pages/CarDetailsPayment";
import UserProf from "../pages/UserProfile";


import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import ForgotPass from "../pages/ForgotPass";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
	   <Route path="/BookingPlaceholder" element={<PlaceHolder />} />
	   <Route path="/promos" element={<Promos />} />
	   <Route path="/contactPage" element={<ContactPage />} />
	                                 
      <Route path="/userprofile" element={<UserProf />} />
	    <Route path="/login" element={<Login />} />
      
       <Route path="/forgotpass" element={<ForgotPass />} />
		 <Route path="/register" element={<Register />} />
	      <Route path="/cars" element={<CarListing />} />
		  <Route path="/carsPay/:slug" element={<CarPayDetails />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
