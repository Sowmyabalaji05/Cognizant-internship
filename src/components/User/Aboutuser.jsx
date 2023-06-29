import React from "react";

import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../Helmet/Helmet";
import AboutSection from "../../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../../assets/all-images/drive.jpg";
import "../../styles/about.css";
import Navbar from "./NavbarUser";
import Footer from "./Footer";
const Aboutuser = () => {
    return (
      <div>
        <Navbar />
        <Helmet title="About">
        <CommonSection title="About Us" />
        <AboutSection aboutClass="aboutPage" />
  
        <section className="about__page-section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="about__page-img">
                  <img src={driveImg} alt="" className="w-100 rounded-3" />
                </div>
              </Col>
  
              <Col lg="6" md="6" sm="12">
                <div className="about__page-content">
                  <h2 className="section__title">
                    We Are Committed To Provide Safe Ride Solutions
                  </h2>
  
                  <p className="section__description">
                  At our car rental company, safety is at the core of everything we do. 
                  We are fully committed to providing safe ride solutions for our valued customers. 
                  With meticulous attention to detail, we maintain a modern and well-maintained fleet 
                  of vehicles equipped with the latest safety features.
                  </p>
  
                  <p className="section__description">
                  Our rigorous cleaning protocols ensure that every vehicle is thoroughly sanitized, 
                  providing you with a clean and hygienic environment.We strictly adhere to all safety 
                  regulations and industry best practices to ensure your peace of mind throughout your rental experience.
                  </p>
  
                  <div className=" d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4">
                      <i class="ri-phone-line"></i>
                    </span>
  
                    <div>
                      <h6 className="section__subtitle">Need Any Help?</h6>
                      <h4>1800-89460-83984</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
  
        
  
        
      </Helmet>
      <Footer />
      </div>
      
    );
  };
  
  export default Aboutuser;