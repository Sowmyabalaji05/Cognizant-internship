import React, {useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import Helmet from "../Helmet/Helmet";
import "../../styles/add-car.css";
import "../../styles/car-item.css";


const AddCar = () => {
 
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [carName, setCarName] = useState("");
  const [model, setModel] = useState("");
  const [seatType, setSeatType] = useState("");
  const [pricePerDay, setPricePerDay] = useState(0);
  const [automatic, setAutomatic] = useState("");
  const [gps, setGps] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [speed, setSpeed] = useState("");
  const [description, setDescription] = useState("");

  let [brandError, setBrandError] = useState(false);
  let [ratingError, setRatingError] = useState(false);
  let [carNameError, setCarNameError] = useState(false);
  let [modelError, setModelError] = useState(false);
  let [seatTypeError, setSeatTypeError] = useState(false);
  let [pricePerDayError, setPricePerDayError] = useState(false);
  let [automaticError, setAutomaticError] = useState(false);
  let [gpsError, setGpsError] = useState(false);
  let [imgUrlError, setImgUrlError] = useState(false);
  let [speedError, setSpeedError] = useState(false);
  let [descriptionError, setDescriptionError] = useState(false);

  //   useEffect(() => {
//     setTimeout(() => {
//       // setIsLoading(false);
//     }, 1000);
//   }, []);

const token = localStorage.getItem("token");
    
const handle = () => {
  console.log("clicked.....")
}
const handleClick = async (e) => {
  e.preventDefault();
  if (carName=== "") {
    setCarNameError(true);
    return;
    } else setCarNameError(false);
    if (brand === "") {
    setBrandError(true);
    return;
    } else setBrandError(false);
    if (rating === "") {
    setRatingError(true);
    return;
    } else setRatingError(false);
    if (imgUrl === "") {
    setImgUrlError(true);
    return;
    } else setImgUrlError(false);
    if (description === "") {
    setDescriptionError(true);
    return;
    } else setDescriptionError(false);
    if (model === "") {
    setModelError(true);
    return;
    } else setModelError(false);
    if (seatType === "") {
      setSeatTypeError(true);
      return;
      } else setSeatTypeError(false);
      if (pricePerDay === "" || isNaN(pricePerDay) || parseFloat(pricePerDay) <= 0) {
        setPricePerDayError(true);
        return;
      } else {
        setPricePerDayError(false);
      }
    if (automatic === "") {
      setAutomaticError(true);
      return;
      } else setAutomaticError(false);
    if (gps === "") {
      setGpsError(true);
      return;
      } else setGpsError(false);
    if (speed === "") {
      setSpeedError(true);
      return;
      } else setSpeedError(false);  
    try {
    // Send the form data to the backend API
    const response = await axios.post("https://localhost:7131/api/Car", {
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
    
    // Handle the response
    if (response.status === 200) {
    // Display success toast
   alert("Car added successfully!");
    // Reset the form fields
    setBrand("");
    setRating("");
    setCarName("");
    setImgUrl("");
    setModel("");
    setSeatType("");
    setPricePerDay(0);
    setAutomatic("");
    setGps("");
    setSpeed("");
    setDescription("");
    } else {
    // Display error toast
    alert("Failed to add car. Please try again.");
    }
    } catch (error) {
    // Display error toast
    alert("Failed to add car. Please try again.");
    console.error(error);
    }
    };

  return (
    <div>
      <Navbar />
      <Helmet title="Add Car">
       
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
                  Add Car
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
                  className="needs-validation"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="addbrand"
                    label="Enter Brand"
                    variant="outlined"
                    fullWidth
                    value={brand}
                    error={brandError}
                    onChange={(e) => setBrand(e.target.value)}
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
                    error={ratingError}
                    onChange={(e) => setRating(e.target.value)}
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
                    error={carNameError}
                    onChange={(e) => setCarName(e.target.value)}
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
                    error={imgUrlError}
                    onChange={(e) => setImgUrl(e.target.value)}
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
                    error={modelError}
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
                    error={seatTypeError}
                    onChange={(e) => setSeatType(e.target.value)}
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
                    error={pricePerDayError}
                    onChange={(e) => setPricePerDay(parseFloat(e.target.value))}
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
                    error={automaticError}
                    onChange={(e) => setAutomatic(e.target.value)}
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
                    error={gpsError}
                    onChange={(e) => setGps(e.target.value)}
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
                    error={speedError}
                    onChange={(e) => setSpeed(e.target.value)}
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
                    error={descriptionError}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ marginTop: "10px" }}
                  />
                  <center>
                   <button
                       className="w-50 car__item-btn car__btn-details mt-4 "
                       variant="contained"
                       id="addButton"
                      color="secondary"
                      onClick={handleClick}
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
            {/* <div className="text-center ml-4"> */}
           
                    {/* </div> */}
          </div>
          
        </div>
      </Helmet>
    </div>
  );
};

export default AddCar
