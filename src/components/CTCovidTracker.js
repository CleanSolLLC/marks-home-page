import React from "react";
import { Card, Button } from "react-bootstrap";
import CTCovidTrackerImg from "../images/CTCovidTracker.png";
import CTCovidTrackerInfo from "./CTCovidTrackerInfo";
import { useState } from "react";

const CTCovidTracker = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Card>
					<Card.Img variant="top" src={CTCovidTrackerImg} />
					<Card.Footer>
						<Button onClick={() => setToggle(!toggle)} size="sm">
							{!toggle ? "Learn More" : "Close Project"}
						</Button>
					</Card.Footer>
				</Card>
			) : (
				<CTCovidTrackerInfo />
			)}
		</>
	);
};
export default CTCovidTracker;
