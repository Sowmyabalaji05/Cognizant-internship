import React from "react";

import HeroSlider from "../../components/UI/HeroSlider";
import Helmet from "../../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../../components/UI/AboutSection";
import ServicesList from "../../components/UI/ServicesList";
import carData from "../../assets/data/carData";
import CarItem from "../../components/UI/CarItem";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../styles/become-driver.css";



const Home = () => {
  return (
    <div>
      <Header />
      <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section className="become__driver">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title1">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section >
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    
        </Helmet>
        <Footer />
    </div>
    
  
  );
};

export default Home;
