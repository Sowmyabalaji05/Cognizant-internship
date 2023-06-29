import React ,{useEffect,useState}from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import Navbar from "./NavbarUser";
import Footer from "./Footer";
import CommonSection from "../../components/UI/CommonSection";
import UserCarItem from "../../components/UI/UserCarItem";
import carData from "../../assets/data/carData";
import "../../styles/car-item.css";
import axios from "axios";

const CarListinguser = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get("https://localhost:7131/api/Car/cars");
      setCarData(response.data);
      // console.log(response.data);
      // console.log(carData);
      
    } catch (error) {
      console.error(error);
    }
  };
    return (
      <div>
        <Navbar />
        <Helmet title="Cars">
        <CommonSection title="Car Listing" />
  {console.log(carData)}
        <section>
          <Container>
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
                <UserCarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
  
      </div>
      
    );
  };
  
  export default CarListinguser;