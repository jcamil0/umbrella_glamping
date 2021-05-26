import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import AboutUs from "../components/AboutUs/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import ContactUs from "../components/ContactUs/ContactUs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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
}

export default App;
