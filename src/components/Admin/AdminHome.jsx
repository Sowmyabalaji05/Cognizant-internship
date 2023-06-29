import React from "react";

// import HeroSlider from "../components/UI/HeroSlider";
import AdminHeroSlider from "../UI/AdminHeroSlider";
// import Helmet from "../components/Helmet/Helmet";
import Helmet from "../Helmet/Helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Container, Row, Col} from "reactstrap";
// import FindCarForm from "../components/UI/FindCarForm";
 import AboutSection from "../UI/AboutSection";
 import ServicesList from "../UI/ServicesList";
 import carData from "../../assets/data/carData";
 import CarItem from "../UI/CarItem";
// import BecomeDriverSection from "../components/UI/BecomeDriverSection";
// import Testimonial from "../components/UI/Testimonial";

// import BlogList from "../components/UI/BlogList";

const AdminHome = () => {
  return (
    <div>
    <Navbar />
    <Helmet title="AdminHome">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <AdminHeroSlider />

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
      {/* =========== become a driver section ============ */}
      {/* <BecomeDriverSection /> */}

      {/* =========== testimonial section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section> */}

      {/* =============== blog section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
    <Footer />
    </div>
  );
};

export default AdminHome;
