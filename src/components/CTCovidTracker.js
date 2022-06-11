import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import CTCovidTrackerImg from "../images/CTCovidTracker.png";
import CTCovidTrackerInfo from "./CTCovidTrackerInfo";
import { useState } from "react";

const CTCovidTracker = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				// <Container className="d-flex vh-100">
				// 	<Row className="m-auto align-self-center">
				// <Container>
				// 	<Row>
				// 		<Col>
				<Card>
					<Card.Img variant="top" src={CTCovidTrackerImg} />
					<Card.Footer>
						<Button onClick={() => setToggle(!toggle)} size="sm">
							{!toggle ? "Learn More" : "Close Project"}
						</Button>
					</Card.Footer>
				</Card>
			) : (
				// 		</Col>
				// 	</Row>
				// </Container>
				<CTCovidTrackerInfo />
			)}
		</>
	);
};
export default CTCovidTracker;
