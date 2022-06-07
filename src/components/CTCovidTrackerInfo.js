import { Container, Card, Button, CardGroup } from "react-bootstrap";
import { useState } from "react";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import rails from "../images/rails.jpg";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import bstrap from "../images/bstrap.png";
import CTCovidTracker from "./CTCovidTracker";
import { Fade } from "react-awesome-reveal";

const CTCovidTrackerInfo = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Fade bottom>
					<Container>
						<CardGroup>
							<Card>
								<Button
									size="sm"
									style={{ position: "absolute", right: -2 }}
									onClick={() => setToggle(!toggle)}
								>
									x
								</Button>
								<Card.Body>
									<Card.Title>State of CT Covid Tracker</Card.Title>
									<Card.Text>
										Query and graph of Connecticut COVID-19 data at the state,
										town, age, gender, and ethnic level
										<hr />
										<ul>
											<li>
												Implemented Ruby on Rails MVC architectural pattern to
												provide a rapid and seamless integration between the
												user interface and the server
											</li>
											<li>
												Utilized Socrata Soda gem to make external API calls to
												the CT Open Data Portal{" "}
											</li>

											<li>
												Modeled database schema to persist data with Active
												Record, PostgreSQL, and Ruby on Rails{" "}
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
										alt="Ruby Logo"
										style={{ width: 45, height: 45 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										mx-auto
										src={rails}
										alt="Rails Logo"
										style={{ width: 45, height: 45 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={postgresql}
										alt="PostgreSQL Logo"
										style={{ width: 70, height: 70 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={vscode}
										alt="VSCode Logo"
										style={{ width: 125, height: 60 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={bstrap}
										alt="Bootstrap Logo"
										style={{ width: 80, height: 60 }}
									/>
								</Card.Footer>
								<Card.Footer>
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
									&nbsp;&nbsp;&nbsp;
									<Button
										href="https://medium.com/@mamark90/using-the-ruby-soda-active-hash-and-chartkick-gems-to-track-covid-19-cases-in-connecticut-4ef3e19a4cc5"
										target="_blank"
									>
										Blog
									</Button>
								</Card.Footer>
							</Card>
						</CardGroup>
					</Container>
				</Fade>
			) : (
				<CTCovidTracker />
			)}
		</>
	);
};
export default CTCovidTrackerInfo;
