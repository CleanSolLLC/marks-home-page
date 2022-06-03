import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import rails from "../images/rails.jpg";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import bstrap from "../images/bstrap.png";
import CTCovidTrackerImg from "../images/CTCovidTracker.png";
import CTCovidTracker from "./CTCovidTracker";

const CTCovidTrackerInfo = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Container>
					<Card>
						<Card.Body>
							<Card.Title>State of CT Covid Tracker</Card.Title>
							<Card.Text>
								Query and graph of Connecticut COVID-19 data at the state, town,
								age, gender, and ethnic level
								<hr />
								<ul>
									<li>
										Implemented Ruby on Rails MVC architectural pattern to
										provide a rapid and seamless integration between the user
										interface and the server
									</li>
									<li>
										Utilized Socrata Soda gem to make external API calls to the
										CT Open Data Portal{" "}
									</li>

									<li>
										Modeled database schema to persist data with Active Record,
										PostgreSQL, and Ruby on Rails{" "}
									</li>

									<li>
										Added Devise gem as a dependency for user authentication
										with a username and password or with OAuth 2.0 to log in
										using Google credentials{" "}
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
							<Button onClick={() => setToggle(!toggle)}>Close Project</Button>
							&nbsp;&nbsp;&nbsp;
							<Button href="https://youtu.be/UdyHcQuvjGc" target="_blank">
								Demo
							</Button>
							&nbsp;&nbsp;&nbsp;
							<Button
								href="https://ct-covid-tracker.herokuapp.com"
								target="_blank"
							>
								Hosted Application
							</Button>
						</Card.Footer>
					</Card>
				</Container>
			) : (
				<CTCovidTracker />
			)}
		</>
	);
};
export default CTCovidTrackerInfo;
