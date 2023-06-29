import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/CommonUser/Home";
import About from "../components/CommonUser/About";
import CarListing from "../components/CommonUser/CarListing";
import CarDetails from "../components/CommonUser/CarDetails";
import NotFound from "../components/CommonUser/NotFound";
import Contact from "../components/CommonUser/Contact";
import Register from "../components/CommonUser/Register";
import Login from "../components/CommonUser/Login";
import AdminHome from "../components/Admin/AdminHome";
import CarList from "../components/Admin/CarList";
import CustomerList from "../components/Admin/CustomerList";
import BookingList from "../components/Admin/BookingList";
import AddCar from "../components/Admin/AddCar";
import EditCar from "../components/Admin/EditCar";
import UserHome from "../components/User/UserHome";
import Aboutuser from "../components/User/Aboutuser";
import Contactuser from "../components/User/Contactuser";
import CarListinguser from "../components/User/CarListinguser";
import History from "../components/User/History";
import Booking from "../components/User/Booking";
import CarDetailsuser from "../components/User/CarDetailsuser";
import CarDetailings from "../components/User/CarDetailings";
import UserBookings from "../components/User/UserBookings";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" >
        <Route index path="home" element={<AdminHome />} />
        <Route path="carList" element={<CarList />} />
        <Route path="addCar" element={<AddCar />} />
        <Route path="editCar" element={<EditCar />} />
        <Route path="customerList" element={<CustomerList />} />
        <Route path="bookingList" element={<BookingList />} />
      </Route>
      <Route path="/user" >
        <Route index path="userHome" element={<UserHome />} />
        <Route path="carList" element={<CarList />} />
        <Route path="booking" element={<Booking />} />
        <Route path="about" element={<Aboutuser />} />
        <Route path="contact" element={<Contactuser />} />
        <Route path="carListinguser" element={<CarListinguser />} />
        <Route path="history" element={<History />} />
        <Route path="/user/car/:slug" element={<CarDetailsuser />} />
        <Route path="/user/carDetail/" element={<CarDetailings />} />
        <Route path="/user/userBooking" element={<UserBookings />} />
      </Route>
    </Routes>
  );
};
export default Routers;
