import { Container, Row, Col } from "react-bootstrap";
import MyvalueShopper from "../images/MyvalueShopper.png";
import MyMealPlanner from "../images/MyMealPlanner.png";
import CTCovidTracker from "../images/CTCovidTracker.png";
import { Carousel } from "3d-react-carousal";
import "../App.css";
import MyValueShopper from "./MyvalueShopper";

let slides = [
	<Link to={} img src={MyvalueShopper} alt="My Value Shopper Carousel Image" />,
	<img src={MyMealPlanner} alt="My Meal Planner Carousel Image" />,
	<img src={CTCovidTracker} alt="CT Covid Tracker Carousel Image" />,
];

const callback = function (index) {
	console.log("callback", index);
};

const Projects = () => {
	return (
		<>
			{/* <Container> */}
			<div className="carouselCenter"></div>
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
