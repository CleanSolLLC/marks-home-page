import { Card, Button } from "react-bootstrap";
import MyMealPlannerImg from "../images/MyMealPlanner.png";
import MyMealPlannerInfo from "./MyMealPlannerInfo";
import { useState } from "react";

const MyMealPlanner = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Card>
					<Card.Img variant="top" src={MyMealPlannerImg} />
					<Card.Footer>
						<Button size="sm" onClick={() => setToggle(!toggle)}>
							{!toggle ? "Learn More" : "Close Project"}
						</Button>
					</Card.Footer>
				</Card>
			) : (
				<MyMealPlannerInfo />
			)}
		</>
	);
};
export default MyMealPlanner;
