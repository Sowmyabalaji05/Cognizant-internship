import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import axios from "axios";

const AdminCarItem = (props) => {
 
  const { carId,imgUrl, model, carName, automatic, speed, pricePerDay } = props.item;
  const isPricePerDayNumber = !isNaN(parseFloat(pricePerDay));

  console.log(props.item);
  const handleDelete = () => {
    console.log(carId);

    const token = localStorage.getItem("token");
    
    // Make the HTTP DELETE request to delete the item
    // You'll need to replace `/api/items/:itemId` with the actual endpoint for deleting an item in your backend
    axios
      .delete(`https://localhost:7131/api/Car/${carId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if(response.status === 200){
        // Handle the response or perform any necessary actions
       
        console.log("Item deleted successfully");
        // Navigate to a different page after deletion, for example, the item list page
        //history.push("/itemList");
        }else{
          console.log("failed to delete item");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          {isPricePerDayNumber && (
            <h6 className="rent__price text-center mt-">
              Rs.{pricePerDay}<span>/Day</span>
            </h6>
          )}

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to="/admin/editCar" state = {{carInfo :props.item}}>Edit</Link>
            {/* sowmya should add the functionality */}
            {/* <Link >Edit</Link> */}
          </button>

          <button className=" w-50 car__item-btn car__btn-details1" onClick={handleDelete}>
            Delete
            {/* sowmya should add the functionality */}
            {/* <Link >Edit</Link> */}
          </button>
        </div>
      </div>
    </Col>
  );
};

export default AdminCarItem;
