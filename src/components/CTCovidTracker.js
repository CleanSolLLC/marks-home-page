import { Container, Card, Row, Col, Button } from "react-bootstrap";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import rails from "../images/rails.jpg";
import webDevBadges from "../images/webDevBadges.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import bstrap from "../images/bstrap.png";

const CTCovidTracker = () => {
	return (
		<>
			<Container className="d-flex vh-100">
				<Row className="m-auto align-self-center">
					<Col>
						<Card style={{ width: "25rem" }}>
							<Card.Body>
								<Card.Title>State of CT Covid Tracker</Card.Title>
								<Card.Text>
									Query and graph of Connecticut COVID-19 data at the state,
									town, age, gender, and ethnic level
									<hr />
									<ul>
										<li>
											Implemented Ruby on Rails MVC architectural pattern to
											provide a rapid and seamless integration between the user
											interface and the server
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
								<img src={HeaderRubyLogo} style={{ width: 45, height: 45 }} />
								<img src={rails} style={{ width: 45, height: 45 }} />
								<img src={webDevBadges} style={{ width: 120, height: 60 }} />
								<img src={postgresql} style={{ width: 70, height: 70 }} />
								<img src={vscode} style={{ width: 90, height: 60 }} />
								<img src={bstrap} style={{ width: 80, height: 60 }} />
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default CTCovidTracker;
