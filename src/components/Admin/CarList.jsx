import React,{ useEffect, useState }  from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection";
import CarItem from "../UI/CarItem";
import carData from "../../assets/data/carData"
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import AdminCarItem from "../UI/AdminCarItem";
import "../../styles/car-item.css";
import axios from "axios";

const CarList = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("https://localhost:7131/api/Car/cars");
      setCarData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Navbar />
    <Helmet title="CarList">
      <CommonSection title="Car List" />

      <section>
        <Container>
        <button className=" w-100 car__item-btn car__btn-details">
            <Link to={"/admin/addCar"}>Press Here to Add a Car</Link>
            {/* sowmya should add the functionality */}
            {/* <Link >Edit</Link> */}
          </button>
          <br/>
          <br/>
          <Row>
          
          

            {/* <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col> */}

            {carData.map((item) => (
              <AdminCarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
    <Footer />
    </div>
  );
};

export default CarList;
