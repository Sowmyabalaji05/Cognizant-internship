import React, {useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import Helmet from "../Helmet/Helmet";
import "../../styles/add-car.css";
import "../../styles/car-item.css";
import {useLocation, useParams} from "react-router-dom";

const EditCar = () => {
    const location = useLocation();
    let { carInfo } = location.state;
    console.log(carInfo);

    // const {carId} =useParams();
   

  const [brand, setBrand] = useState(carInfo.brand);
  const [rating, setRating] = useState(carInfo.rating);
  const [carName, setCarName] = useState(carInfo.carName);
  const [model, setModel] = useState(carInfo.model);
  const [seatType, setSeatType] = useState(carInfo.seatType);
  const [pricePerDay, setPricePerDay] = useState(carInfo.pricePerDay);
  const [automatic, setAutomatic] = useState(carInfo.automatic);
  const [gps, setGps] = useState(carInfo.gps);
  const [imgUrl, setImgUrl] = useState(carInfo.imgUrl);
  const [speed, setSpeed] = useState(carInfo.speed);
  const [description, setDescription] = useState(carInfo.description);
  const [updateSuccess,setUpdateSuccess] = useState(false);
  const [updateFailure,setUpdateFailure] = useState(false);

const carId  =  carInfo.carId;

// const handleUpdate = () =>{
  const token = localStorage.getItem("token");


const handleSubmit= (event) => {
  event.preventDefault();
   
    try{
    // Send the form data to the backend API
    const response =axios.put(`https://localhost:7131/api/Car/${carId}`, {
      carId,
      brand,
      rating,
      carName,
      imgUrl,
      model,
      seatType,
      pricePerDay,
      automatic,
      gps,
      speed,
      description
   
    },{

    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);
  alert("Car edited successfully!");

    } catch (error) {
    // Display error toast
    alert("Failed to edit car. Please try again.");
    console.error(error);
    }

    };

  return (
    
     
      <Helmet title="Edit">
        <ToastContainer />
        <div
          className="container my-5 p-5"
          style={{ backgroundColor: "#FFFFFF", borderRadius: 10 }}
        >
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <div className="container">
            <div className="row">
              <br></br>
              <center>
                <h3
                  className="d-flex justify-content-center py-2 mb-5"
                  style={{ backgroundColor: "#000", color: "#FFFFFF" }}
                >
                  Edit Car
                </h3>
              </center>
              <script src="https://kit.fontawesome.com/yourcode.js"></script>
              <div
                className="col-5"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="card"
                  style={{
                    margin: "1px",
                    float: "left",
                    borderRadius: "25px",
                    width: "70%",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={imgUrl}
                    alt="Add correct URL to view preview"
                    style={{
                      height: "300px",
                      borderRadius: "25px 25px 0px 0px",
                    }}
                    onErrorCapture={(e) => {
                      e.target.src = "/previewCar.png";
                    }}
                  />
                  <div
                    className="card-body"
                    style={{
                      backgroundColor: " #293d3d",
                      borderRadius: "0px 0px 20px 20px",
                      width: "100%",
                      minHeight: "65px",
                    }}
                  >
                    <center>
                      <h5 className="card-title" style={{ color: "white" }}>
                        {carName}
                      </h5>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <form
                 onSubmit={handleSubmit}
                >
                  <TextField
                    id="addbrand"
                    label="Enter Brand"
                    variant="outlined"
                    fullWidth
                    value={brand}
                   
                    onChange={(event) => setBrand(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addRating"
                    label="Enter Rating"
                    variant="outlined"
                    fullWidth
                    value={rating}
                  
                    onChange={(event) => setRating(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addName"
                    label="Enter carName"
                    variant="outlined"
                    fullWidth
                    value={carName}
                   
                    onChange={(event) => setCarName(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addImageUrl"
                    label="Enter the Image Url"
                    variant="outlined"
                    fullWidth
                    value={imgUrl}
                   
                    onChange={(event) => setImgUrl(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addModel"
                    label="Enter the Model"
                    variant="outlined"
                    fullWidth
                    value={model}
                 
                    onChange={(e) => setModel(e.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addSeattype"
                    label="Enter the seatType"
                    variant="outlined"
                    fullWidth
                    value={seatType}
                  
                    onChange={(event) => setSeatType(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addTiming"
                    label="Enter price Per Day"
                    variant="outlined"
                    fullWidth
                    value={pricePerDay}
                   
                    onChange={(event) => setPricePerDay(parseFloat(event.target.value))}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addtype"
                    label="Enter the automatic"
                    variant="outlined"
                    fullWidth
                    value={automatic}
                    
                    onChange={(event) => setAutomatic(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="addGps"
                    label="Enter the Gps"
                    variant="outlined"
                    fullWidth
                    value={gps}
                   
                    onChange={(event) => setGps(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="AddMileage"
                    label="Enter Speed"
                    variant="outlined"
                    fullWidth
                    value={speed}
                   
                    onChange={(event) => setSpeed(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <br />
                  <TextField
                    id="adddescription"
                    label="Enter the description"
                    variant="outlined"
                    fullWidth
                    value={description}
                  
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                 <center>
                   <button
                       className="w-50 car__item-btn car__btn-details mt-4 "
                       variant="contained"
                       id="addButton"
                      color="secondary"
                      onClick={handleSubmit}
                      style={{
                      backgroundColor: "#293d3d",
                      color: "#FFFFFF",
                        padding: "8px 50px",
                       }}
                    >
                      Submit
                    </button>
                    </center>
                  
                 
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </Helmet>
  
  );
};

export default EditCar;
