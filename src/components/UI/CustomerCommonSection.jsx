import React from "react";
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CustomerCommonSection = ({ title }) => {
  return (
    <section className="common__section1 mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
      </Container>
    </section>
  );
};

export default CustomerCommonSection;
