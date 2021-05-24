import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Landing/Navbar/Navbar";
import Carousel from "./Landing/Carousel/Carousel";
import AboutUs from "./Landing/AboutUs/AboutUs";
import Rooms from "./Landing/Rooms/Rooms";
import ContactUs from "./Landing/ContactUs/ContactUs";

const Landing = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navbar />
          <Carousel />
          <AboutUs />
          <Rooms />
          <ContactUs />
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
