import { Container, Card, Row, Col, Button } from "react-bootstrap";
import MyMealPlannerImg from "../images/MyMealPlanner.png";
import MyMealPlannerInfo from "./MyMealPlannerInfo";
import { useState } from "react";

const MyMealPlanner = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				// <Container className="d-flex vh-100">
				// 	<Row className="m-auto align-self-center">
				<Container>
					<Row>
						<Col>
							<Card>
								<Card.Img variant="top" src={MyMealPlannerImg} />
								<Card.Footer>
									<Button size="sm" onClick={() => setToggle(!toggle)}>
										{!toggle ? "Learn More" : "Close Project"}
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			) : (
				<MyMealPlannerInfo />
			)}
		</>
	);
};
export default MyMealPlanner;
