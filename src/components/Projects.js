import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import "../App.css";
import MyValueShopper from "./MyvalueShopper";
import CTCovidTracker from "./CTCovidTracker";
import MyMealPlanner from "./MyMealPlanner";

let slides = [<MyValueShopper />, <CTCovidTracker />, <MyMealPlanner />];

const callback = function (index) {
	console.log("callback", index);
};

const Projects = () => {
	return (
		<>
			{/* <Container> */}
			{/* <div className="carouselCenter"></div> */}
			<Carousel
				slides={slides}
				autoplay={false}
				interval={1000}
				onSlideChange={callback}
			/>
			;{/* </Container> */}
		</>
	);
};
export default Projects;
