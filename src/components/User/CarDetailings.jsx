import React, { useEffect } from "react";

import carData from "../../assets/data/carData";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import { useParams,useLocation } from "react-router-dom";
import "../../styles/CarDetails.css";
import Navbar from "./NavbarUser";
import Footer from "./Footer";
import Booking from "./Booking";
import CarDetailsuser from "./CarDetailsuser";


// const CarDetailings = ({}) => {
//   // const { slug } = useParams();

//   // const singleCarItem = carData.find((item) => item.carName === slug);
//   const location = useLocation();
//   let { carItem } = location.state;
//   // console.log(carItem);
//   const singleCarItem = carItem;

//   console.log(singleCarItem);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [singleCarItem]);
//   if (!singleCarItem) {
//     // Handle case when car item is not found
//     return <div>Car not found</div>;
//   }


//   return (
//     <div>
//       <Navbar />
//       <Helmet title={singleCarItem.carName}>
//         <section>
//           <Container>
//             <Row>
//               <Col lg="6">
//                 <img src={singleCarItem.imgUrl} alt="" className="w-100" />
//               </Col>

//               <Col lg="6">
//                 <div className="car__info">
//                   <h2 className="section__title">{singleCarItem.carName}</h2>

//                   <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
//                     <h6 className="rent__price fw-bold fs-4">
//                       Rs.{singleCarItem.pricePerDay}/ Day
//                     </h6>

//                     <span className=" d-flex align-items-center gap-2">
//                       <span style={{ color: "#f9a826" }}>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                         <i class="ri-star-s-fill"></i>
//                       </span>
//                       ({singleCarItem.rating} ratings)
//                     </span>
//                   </div>

//                   <p className="section__description">
//                     {singleCarItem.description}
//                   </p>

//                   <div
//                     className=" d-flex align-items-center mt-3"
//                     style={{ columnGap: "4rem" }}
//                   >
//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i
//                         class="ri-roadster-line"
//                         style={{ color: "#f9a826" }}
//                       ></i>{" "}
//                       {singleCarItem.model}
//                     </span>

//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i
//                         class="ri-settings-2-line"
//                         style={{ color: "#f9a826" }}
//                       ></i>{" "}
//                       {singleCarItem.automatic}
//                     </span>

//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i
//                         class="ri-timer-flash-line"
//                         style={{ color: "#f9a826" }}
//                       ></i>{" "}
//                       {singleCarItem.speed}
//                     </span>
//                   </div>

//                   <div
//                     className=" d-flex align-items-center mt-3"
//                     style={{ columnGap: "2.8rem" }}
//                   >
//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
//                       {singleCarItem.gps}
//                     </span>

//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i
//                         class="ri-wheelchair-line"
//                         style={{ color: "#f9a826" }}
//                       ></i>{" "}
//                       {singleCarItem.seatType}
//                     </span>

//                     <span className=" d-flex align-items-center gap-1 section__description">
//                       <i
//                         class="ri-building-2-line"
//                         style={{ color: "#f9a826" }}
//                       ></i>{" "}
//                       {singleCarItem.brand}
//                     </span>
//                   </div>
//                 </div>
//               </Col>

//               <div className="text-center flex-container p-3">
//                     <Button href="/user/carListinguser" size="lg">Back to Menu</Button>
//                   </div>
                
//             </Row>
//           </Container>
//         </section>
//       </Helmet>
//      <Footer /> 

//     </div>

//   );
// };

const CarDetailings = () => {
    return(
        <>
        <Navbar />
        <Helmet>
        <CarDetailsuser />
            
        </Helmet>
        <Footer />
   
        </>
    );
}

export default CarDetailings;

