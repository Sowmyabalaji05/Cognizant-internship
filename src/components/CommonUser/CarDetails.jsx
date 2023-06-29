import React, { useEffect } from "react";

import carData from "../../assets/data/carData";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import { useParams,useLocation} from "react-router-dom";
import "../../styles/CarDetails.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const CarDetails = () => {
  // const { slug } = useParams();

  // const singleCarItem = carData.find((item) => item.carName === slug);

  const location = useLocation();
  let { carInfo } = location.state;
  console.log(carInfo);
  const singleCarItem = carInfo;
  console.log(singleCarItem)

  // console.log(singleCarItem.pricePerDay);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);


  // const isPricePerDayNumber = !isNaN(parseFloat(singleCarItem.pricePerDay));

  return (
    <div>
      <Header />
      <Helmet title={singleCarItem.carName}>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <img src={singleCarItem.imgUrl} alt="" className="w-100" />
              </Col>

              <Col lg="6">
                <div className="car__info">
                  <h2 className="section__title">{singleCarItem.carName}</h2>

                  <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      Rs.{singleCarItem.pricePerDay}/Day
                    </h6>

                    <span className=" d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      ({singleCarItem.rating} ratings)
                    </span>
                  </div>

                  <p className="section__description">
                    {singleCarItem.description}
                  </p>

                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "4rem" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-roadster-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleCarItem.model}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-settings-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleCarItem.automatic}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-timer-flash-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleCarItem.speed}
                    </span>
                  </div>

                  <div
                    className=" d-flex align-items-center mt-3"
                    style={{ columnGap: "2.8rem" }}
                  >
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                      {singleCarItem.gps}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-wheelchair-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleCarItem.seatType}
                    </span>

                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        class="ri-building-2-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {singleCarItem.brand}
                    </span>
                  </div>
                </div>
              </Col>

              <div className="flex-container">

               

                <Button href="/cars" size="lg">Back to Menu</Button>

              </div>
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />

    </div>

  );
};

export default CarDetails;

