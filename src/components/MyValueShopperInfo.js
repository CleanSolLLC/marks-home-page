import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import rails from "../images/rails.jpg";
import webDevBadges from "../images/webDevBadges.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import bstrap from "../images/bstrap.png";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import MyValueShopper from "./MyvalueShopper";
import Fade from "react-reveal/Fade";

const MyValueShopperInfo = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Fade bottom>
					<Container>
						<Card>
							<Card.Body>
								<Card.Title>My Value Shopper</Card.Title>
								<Card.Text>
									Application maintains a list of Amazon Items for users who are
									not ready to purchase
									<hr />
									<ul>
										<li>
											Developed application using Ruby on Rails on the backend,
											React JavaScript on the frontend, Redux for state
											management and PostgreSQL for the database
										</li>

										<li>
											Designed models in Rails to securely make external API
											calls to a third-party API site that scrapes the
											Amazon.com website
										</li>

										<li>
											Utilized JSON Web Tokens for server-side authentication
											and JWT and localStorage to store encrypted user
											information client side. Incorporated Bootstrap containers
											to facilitate responsive design
										</li>
									</ul>
								</Card.Text>
							</Card.Body>
							<Card.Footer style={{ background: "white" }}>
								<img
									className="mx-auto"
									mx-auto
									src={HeaderRubyLogo}
									style={{ width: 45, height: 45 }}
								/>
								<img
									className="mx-auto"
									mx-auto
									src={rails}
									style={{ width: 45, height: 45 }}
								/>
								<img
									className="mx-auto"
									mx-auto
									src={webDevBadges}
									style={{ width: 120, height: 60 }}
								/>
								<img
									className="mx-auto"
									src={react}
									style={{ width: 65, height: 65 }}
								/>
								<img
									className="mx-auto"
									src={redux}
									style={{ width: 65, height: 65 }}
								/>
								<img
									className="mx-auto"
									src={postgresql}
									style={{ width: 70, height: 70 }}
								/>
								<img
									className="mx-auto"
									src={vscode}
									style={{ width: 125, height: 60 }}
								/>
								&nbsp;&nbsp;
								<img
									className="mx-auto"
									src={bstrap}
									style={{ width: 80, height: 60 }}
								/>
							</Card.Footer>
							<Card.Footer>
								<Button onClick={() => setToggle(!toggle)}>
									Close Project
								</Button>
								&nbsp;&nbsp;&nbsp;
								<Button href="https://youtu.be/yQcJnGjOt14" target="_blank">
									Demo
								</Button>
							</Card.Footer>
						</Card>
					</Container>
				</Fade>
			) : (
				<MyValueShopper />
			)}
		</>
	);
};
export default MyValueShopperInfo;
