import { Container, Card, Row, Col, Button } from "react-bootstrap";
import MyvalueShopperImg from "../images/MyvalueShopper.png";
import MyValueShopperInfo from "./MyValueShopperInfo";
import { useState } from "react";

const MyValueShopper = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Container className="d-flex vh-100">
					<Row className="m-auto align-self-center">
						<Col>
							<Card>
								<Card.Img variant="top" src={MyvalueShopperImg} />
								<Card.Footer>
									<Button onClick={() => setToggle(!toggle)}>
										{!toggle ? "Learn More" : "Close Project"}
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			) : (
				<MyValueShopperInfo />
			)}
		</>
	);
};
export default MyValueShopper;
