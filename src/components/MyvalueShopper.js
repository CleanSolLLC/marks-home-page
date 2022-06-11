import { Card, Button } from "react-bootstrap";
import MyvalueShopperImg from "../images/MyvalueShopper.png";
import MyValueShopperInfo from "./MyValueShopperInfo";
import { useState } from "react";

const MyValueShopper = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Card>
					<Card.Img variant="top" src={MyvalueShopperImg} />
					<Card.Footer>
						<Button size="sm" onClick={() => setToggle(!toggle)}>
							{!toggle ? "Learn More" : "Close Project"}
						</Button>
					</Card.Footer>
				</Card>
			) : (
				<MyValueShopperInfo />
			)}
		</>
	);
};
export default MyValueShopper;
