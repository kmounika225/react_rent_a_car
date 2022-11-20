import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PlaceHolder from "../pages/BookingPlaceholder";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";
import Register from "../pages/Register";

import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
	   <Route path="/BookingPlaceholder" element={<PlaceHolder />} />
	   
	    <Route path="/login" element={<Login />} />
		 <Route path="/register" element={<Register />} />
	      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
