import { Carousel } from "3d-react-carousal";
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
			<Carousel
				slides={slides}
				autoplay={false}
				interval={1000}
				onSlideChange={callback}
			/>
		</>
	);
};
export default Projects;
