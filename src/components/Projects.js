import { Carousel } from "3d-react-carousal";
import MyValueShopper from "./MyvalueShopper";
import CTCovidTracker from "./CTCovidTracker";
import MyMealPlanner from "./MyMealPlanner";
import { Col, Container, Row } from "react-bootstrap";

let slides = [<MyValueShopper />, <CTCovidTracker />, <MyMealPlanner />];

const callback = function (index) {
	console.log("callback", index);
};

const Projects = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Carousel
							//className="orientate"
							slides={slides}
							autoplay={false}
							interval={1000}
							onSlideChange={callback}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Projects;
